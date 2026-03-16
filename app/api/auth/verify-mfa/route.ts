// app/api/auth/verify-mfa/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { mfaToken, code } = await request.json();

    // Call your custom API to verify MFA
    const res = await fetch(`${process.env.API_URL}/auth/verify-mfa`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mfaToken, code }),
    });

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: "Invalid MFA code" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
