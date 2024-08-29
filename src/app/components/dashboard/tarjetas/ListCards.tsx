import { cookies } from "next/headers";
import Card from "./Card";
import { AccountType } from "@/app/types/dashboard.types";

export default async function ListCards() {
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
  return (
    <section>
      <div className="container_activity">
        <h5>Tus tarjetas</h5>
        <Card token={token ? token : ""} accountId={data.id} />
      </div>
    </section>
  );
}
