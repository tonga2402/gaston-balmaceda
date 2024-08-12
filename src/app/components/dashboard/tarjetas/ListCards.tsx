import React from "react";
import ShowCard from "./ShowCard";
import { cookies } from "next/headers";
import { jwtDecode, JwtPayload } from "jwt-decode";
import Card from "./Card";



type aliasType = {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
};

export default async function ListCards  ()  {

  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "")


  const res = await fetch(
    `https://digitalmoney.digitalhouse.com/api/account`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: aliasType = await res.json();
 console.log(token)
  return (
    <section>
      <div className="container_activity">
        <h5>Tus tarjetas</h5>

        {/* <ShowCard /> */}
        <Card token={token ? token : ''} accountId={data.id} />
      </div>
    </section>
  );
};

