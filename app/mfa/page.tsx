// app/mfa/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { mfaSchema, type MFAInput } from "@/lib/validations/auth";
import { useAuthStore } from "@/store/authStore";
import { signIn } from "next-auth/react";

export default function MFAPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { mfaToken, email, clearMFAData } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MFAInput>({
    resolver: zodResolver(mfaSchema),
  });

  const onSubmit = async (data: MFAInput) => {
    if (!mfaToken || !email) {
      router.push("/login");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/auth/verify-mfa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mfaToken,
          code: data.code,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid MFA code");
      }

      // Complete sign in
      const result = await signIn("credentials", {
        email,
        password: "", // Password not needed here, MFA token is used
        mfaCode: data.code,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      clearMFAData();
      router.push("/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Invalid MFA code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            Two-Factor Authentication
          </CardTitle>
          <CardDescription>
            Enter the verification code from your authenticator app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input
                id="code"
                type="text"
                placeholder="000000"
                maxLength={6}
                {...register("code")}
              />
              {errors.code && (
                <p className="text-sm text-destructive">
                  {errors.code.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
