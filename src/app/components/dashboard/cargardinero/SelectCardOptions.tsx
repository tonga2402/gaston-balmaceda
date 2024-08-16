import React from "react";
import CardOptions from "./CardOptions";
import { cookies } from "next/headers";

type aliasType = {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
};

export default async function SelectCardOptions() {
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
  const data: aliasType = await res.json();

  return (
    <section>
      <div className="container_activity">
        <h5 style={{ color: "black" }}>Tus tarjetas</h5>
        {/* <Card token={token ? token : ""} accountId={data.id} /> */}
        <CardOptions token={token ? token : ''} accountId={data.id}  />
      </div>
    </section>
  );
}
