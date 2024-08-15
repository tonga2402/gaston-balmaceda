import FormNewCard from "@/app/components/dashboard/tarjetas/FormNewCard";
import { cookies } from "next/headers";

type accountType = {
  alias: "string";
  available_amount: number;
  cvu: "string";
  id: number;
  user_id: number;
};
export default async function NuevaTarjeta() {
  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "");

  const res = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data: accountType = await res.json();
  console.log(token);

  return (
    <div className="container_newCard">
      <FormNewCard token={token ? token : ""} accountId={data.id} />
    </div>
  );
}
