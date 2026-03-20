"use strict";

const AWS = require("aws-sdk");
const FS = require("fs");
const PATH = require("path");
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const rootFolder = "build";
const distFolderPath = PATH.join(__dirname, `../${rootFolder}/`);

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function detectContentType(filePath) {
  const typeIndex = filePath.lastIndexOf(".");

  if (typeIndex > -1) {
    const extension = filePath.substring(typeIndex + 1);

    switch (extension) {
      case "html":
        return "text/html";
      case "json":
        return "application/json";
      case "js":
        return "application/javascript";
      case "css":
        return "text/css";
      case "svg":
        return "image/svg+xml";
      case "png":
        return "image/png";
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      default:
        return "application/octet-stream";
    }
  } else {
    return "application/octet-stream";
  }
}

function uploadFile(filePath, fileName) {
  s3.putObject(
    {
      Bucket: BUCKET_NAME,
      Key: filePath.replace(distFolderPath, ""),
      Body: FS.readFileSync(filePath),
      ContentType: detectContentType(filePath),
      //ACL: 'public-read'
    },
    (err) =>
      console.log(
        err
          ? `Error uploading file: ${err}`
          : `Successfully uploaded '${fileName}'!`,
      ),
  );
}

function uploadDirectoryFiles(path) {
  const files = FS.readdirSync(path);

  if (!files || !files.length) {
    console.error("Folder is empty or does not exist.");
    return;
  }

  for (const fileName of files) {
    const filePath = PATH.join(path, fileName);

    if (FS.lstatSync(filePath).isDirectory()) {
      uploadDirectoryFiles(filePath);
      continue;
    }
    uploadFile(filePath, fileName);
  }
}

function deleteObjectPromise(objectKey) {
  return new Promise((resolve, reject) => {
    s3.deleteObject({ Bucket: BUCKET_NAME, Key: objectKey }, (error) => {
      if (error) {
        console.error(`Error deleting file: ${objectKey}`);
        reject(`Error deleting file: ${objectKey}`);
      } else {
        console.info(`Successfully deleted: '${objectKey}'`);
        resolve();
      }
    });
  });
}

function emptyBucket() {
  console.info("Deleting old objects...");

  return new Promise((resolve, reject) => {
    s3.listObjects({ Bucket: BUCKET_NAME }, (error, data) => {
      if (error) {
        reject(`Error occurred ${error}`);
      } else {
        resolve(
          Promise.all(
            (data.Contents || []).map((it) => it.Key).map(deleteObjectPromise),
          ),
        );
      }
    });
  });
}

emptyBucket()
  .then(() => {
    console.info("Uploading new objects...");

    uploadDirectoryFiles(distFolderPath);
  })
  .catch((err) => console.error(`Error occurred when deleting: `, err));
