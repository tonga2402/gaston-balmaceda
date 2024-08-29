import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { data } = await request.json();

  try {
    const res = await fetch(`${process.env.API_URL}/api/accounts/8/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await res.json();

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error);
  }
}
