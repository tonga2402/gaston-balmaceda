import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { data , account_id } = await request.json();

  try {
    const res = await fetch(`${process.env.API_URL}/api/accounts/${account_id}/deposits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const depositData = await res.json();

    return NextResponse.json(depositData);
  } catch (error) {
    return NextResponse.json(error);
  }
}