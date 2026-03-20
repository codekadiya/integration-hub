"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthHeader } from "@/components/auth/auth-header";
import { mfaSchema, type MFAInput } from "@/lib/validations/auth";

export default function MFAPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem("mfa_username");
    const sessionId = sessionStorage.getItem("mfa_session_id");
    if (!username || !sessionId) {
      router.push("/auth/login");
      return;
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MFAInput>({
    resolver: zodResolver(mfaSchema),
  });

  const onSubmit = async (data: MFAInput) => {
    const username = sessionStorage.getItem("mfa_username");
    const sessionId = sessionStorage.getItem("mfa_session_id");

    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/loginconfirm`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            session: sessionId,
            code: data.code,
          }),
        },
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        setError("Invalid MFA code");
        return;
      }

      sessionStorage.setItem("token", result.access_token);
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          username: result.username,
          firstName: result.firstName,
          lastName: result.lastName,
          accountId: result.accountId,
          accountName: result.accountName,
          role: result.access_role,
        }),
      );

      sessionStorage.removeItem("mfa_username");
      sessionStorage.removeItem("mfa_session_id");

      router.push("/");
    } catch {
      setError("Invalid MFA code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md">
        <AuthHeader />

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
                required
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

        <CardFooter className="flex justify-center border-0 bg-transparent pt-2 pb-4">
          <Link
            href="/auth/login"
            className="text-sm text-secondary hover:underline"
          >
            Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
