import { UserType } from "@/app/types/dashboard.types";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import HeadersContain from "./HeadersContain";

interface Auth0JwtPayload extends JwtPayload {
  username: string;
  email: string;
  exp: number
}

export default async function UserHeader() {
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

  const dataFirstName = data.firstname?.toUpperCase();
  const dataLastName = data.lastname?.toUpperCase();

  if (!data.firstname) {
    return <></>;
  }

  return (
    <>
      <div className="avatar_logo">
        {data?.firstname.substring(0, 1)?.toUpperCase()}
        {data?.lastname.substring(0, 1)?.toUpperCase()}
      </div>
      
      <HeadersContain
        dataFirstName={dataFirstName}
        dataLastName={dataLastName}
      />
    </>
  );
}
