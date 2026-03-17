// lib/validations/auth.ts
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const mfaSchema = z.object({
  code: z.string().length(6, "MFA code must be 6 digits"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type MFAInput = z.infer<typeof mfaSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
