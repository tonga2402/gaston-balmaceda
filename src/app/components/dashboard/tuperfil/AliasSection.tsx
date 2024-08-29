import { cookies } from "next/headers";
import React from "react";
import CardAlias from "./CardAlias";

type aliasType = {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
};
export default async function AliasSection() {
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
  const data: aliasType = await res.json();

  return (
    <section>
      <div className="container_alias">
        <h4>
          Copia tu cvu o alias para ingresar o transferir dinero desde otra
          cuenta
        </h4>
      <CardAlias cvu={`${data.cvu}`} alias={`${data.alias}`}/>
      </div>
    </section>
  );
}
