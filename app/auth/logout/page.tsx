"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    router.replace("/auth/login");
  }, [router]);

  return <></>;
}
