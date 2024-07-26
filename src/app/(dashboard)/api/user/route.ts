import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookie = cookies();
  const token = cookie.get("Auth")?.value;
  const user = jwtDecode<JwtPayload>(token as string);
  const userId = user.username as number;

  try {
    const res = await fetch(
      `https://digitalmoney.digitalhouse.com/api/users/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token?.replace(/['"]+/g, "")}`,
        },
      }
    );
    const data = await res.json();

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
