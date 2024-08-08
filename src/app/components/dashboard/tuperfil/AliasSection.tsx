import { cookies } from "next/headers";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";

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
      <div className="container_alias">
        <h4>
          Copia tu cvu o alias para ingresar o transferir dinero desde otra
          cuenta
        </h4>
        <div className="card_alias">
          <div>
            <h3>CVU</h3>
            <p>{data.cvu}</p>
          </div>
          <IoCopyOutline
            style={{ fontSize: "25px", color: "var(--primary-color)" }}
          />
        </div>{" "}
        <div className="card_alias">
          <div>
            <h3>Alias</h3>
            <p>{data.alias}</p>
          </div>
          <IoCopyOutline
            style={{ fontSize: "25px", color: "var(--primary-color)" }}
          />
        </div>
      </div>
    </section>
  );
}
