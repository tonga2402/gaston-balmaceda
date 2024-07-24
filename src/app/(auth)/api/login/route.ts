import { cookies } from "next/headers";

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

    cookies().set('Auth', JSON.stringify(token) ,{
      httpOnly:true,
      secure: true,
      sameSite: 'strict'
    })

    return new Response(JSON.stringify(token));
    
  } catch (error) {
    return new Response(JSON.stringify(error));
    
  }

}
