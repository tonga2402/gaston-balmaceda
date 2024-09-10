"use server";

import { cookies } from "next/headers";

export const login = async (formData: FormData, email: string) => {
  const newEmail = email.replace(/['"]+/g, "");

  const res = await fetch(`${process.env.API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: newEmail,
      password: formData.get("password"),
    }),
  });
  const auth = await res.json();

  if (res.ok) {
    cookies().set("Auth", JSON.stringify(auth.token), {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return auth;
  } else if (res.status === 401) {
    return { message: "Credenciales Invalidas" };
  }

  return { message: "Intente mas Tarde" };
};
