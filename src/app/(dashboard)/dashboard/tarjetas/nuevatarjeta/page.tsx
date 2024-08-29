import FormNewCard from "@/app/components/dashboard/tarjetas/FormNewCard";
import { AccountType } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";

export default async function NuevaTarjeta() {
  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "");

  const res = await fetch(`${process.env.API_URL}/api/account`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data: AccountType = await res.json();
  console.log(token);

  return (
    <div className="container_newCard">
      <FormNewCard token={token ? token : ""} accountId={data.id} />
    </div>
  );
}
