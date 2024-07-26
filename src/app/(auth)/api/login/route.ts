import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password, email } = await request.json();

  try {  

    const res = await fetch("https://digitalmoney.digitalhouse.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });
    const token = await res.json();

    console.log(token.token)

    cookies().set('Auth',JSON.stringify (token.token) ,{
      httpOnly:true,
      secure: true,
      sameSite: 'none'
    })

    return NextResponse.json(token);

  } catch (error) {
    return NextResponse.json(error);
    
  }

}
