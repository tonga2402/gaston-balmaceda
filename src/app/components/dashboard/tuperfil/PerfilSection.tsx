import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import FormPerfil from "./FormPerfil";
import { UserType } from "@/app/types/dashboard.types";

interface Auth0JwtPayload extends JwtPayload {
  username: string;
  email: string;
  exp: number
}

export default async function PerfilSection() {
  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "") as string;
  const user = jwtDecode<Auth0JwtPayload>(token);
  const userId = user.username;

  const res = await fetch(`${process.env.API_URL}/api/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data: UserType = await res.json();
  if(!res.ok){
    return <></>
  } 

  return (
    <section>
      <FormPerfil user={{
        id: data.id,
        dni: data.dni,
        email: data.email,
        phone: data.phone,
        firstname: data.firstname,
        lastname: data.lastname
      }} token={token ? token : ''}/>
    </section>
  );
}
