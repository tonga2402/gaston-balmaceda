import CardOptions from "./CardOptions";
import { cookies } from "next/headers";
import { AccountType } from "@/app/types/dashboard.types";

export default async function SelectCardOptions() {
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
        <h5 style={{ color: "black" }}>Tus tarjetas</h5>
        <CardOptions token={token ? token : ""} accountId={data.id} />
      </div>
    </section>
  );
}
