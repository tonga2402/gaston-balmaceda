import { cookies } from "next/headers";
import React from "react";

type ActivityType = {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
};

export default async function ActivityDetail({
  params,
}: {
  params: { slug: string[]};
}) {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");
  const accountId = params.slug[0]
  const id = params.slug[1]

  console.log(params.slug[0]);
  const res = await fetch(
    `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/transactions/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: ActivityType = await res.json();
  console.log(data);
  return (
    <div>
      <h1 style={{ color: "black" }}>{data.description}</h1>
    </div>
  );
}
