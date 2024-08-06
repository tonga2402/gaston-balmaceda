import Link from "next/link";
import React from "react";
import CardActivity from "./CardActivity";
import { IoArrowForwardOutline } from "react-icons/io5";

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

type CardActivityProps = {
  token: string;
  accountId: number;
};

export default async function Activity({
  token,
  accountId,
}: CardActivityProps) {
  const res = await fetch(
    `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/activity`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: ActivityType[] = await res.json();

  if (!data.length) {
    return (
      <>
        <hr />
      </>
    );
  }
  return data.map((value) => (
    <>
      <CardActivity
        id={value.id}
        destination={value.destination}
        amount={value.amount}
        dated={value.dated}
      />
    </>
  ));
}
