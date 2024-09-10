import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/logout`, {
      method: "POST",
    });
    const token = await res.json();

    cookies().delete("Auth");

    return NextResponse.json(token);
  } catch (error) {
    return NextResponse.json(error);
  }
}
