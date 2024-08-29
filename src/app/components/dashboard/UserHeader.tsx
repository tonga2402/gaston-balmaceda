import { UserType } from "@/app/types/dashboard.types";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function UserHeader() {
  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "");
  const user = jwtDecode<JwtPayload>(token as string);
  const userId = user.username as number;

  const res = await fetch(`${process.env.API_URL}/api/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data: UserType = await res.json();

  if (!data.firstname) {
    return <></>;
  }

  return (
    <>
      <div className="avatar_logo">
        {data?.firstname.substring(0, 1)?.toUpperCase()}
        {data?.lastname.substring(0, 1)?.toUpperCase()}
      </div>
      <p>Hola,</p>
      <Link className="link_dashboard" href={"/dashboard"}>
        {(data?.firstname).toUpperCase()} {(data?.lastname).toUpperCase()}
      </Link>
    </>
  );
}
