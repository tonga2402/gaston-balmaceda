"use server";
import { z } from 'zod'
import { RegisterSchema } from '@/app/schema/register.schema';
import { AccessDeniedError } from '@/app/common/http.errors';

type RegisterSchemaType = z.infer<typeof RegisterSchema>

export const registerUser = async (data: RegisterSchemaType) => {

  console.log(data)
  const res = await fetch(`${process.env.API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      dni: Number(data.dni),
      email: data.email,
      password: data.password,
      phone: data.phone,
    }),
  });

  if (!res.ok) {

    if (res.status === 400) {
      throw new AccessDeniedError("Verificar datos ingresados")
    }
    if (res.status === 409) {
      throw new AccessDeniedError("Email ya registrado")
    }
    throw new Error()
  }
  return res.json();

};
