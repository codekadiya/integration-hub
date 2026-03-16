// app/api/auth/forgot-password/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Call your custom API to handle forgot password
    const res = await fetch(`${process.env.API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      return NextResponse.json({ message: "Reset link sent" });
    } else {
      const error = await res.json();
      return NextResponse.json(error, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
