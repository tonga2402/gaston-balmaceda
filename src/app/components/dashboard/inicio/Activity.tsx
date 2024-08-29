import { ActivityType, CardTypeProps } from "@/app/types/dashboard.types";
import CardActivity from "./CardActivity";

export default async function Activity({ token, accountId }: CardTypeProps) {
  const res = await fetch(
    `${process.env.API_URL}/api/accounts/${accountId}/activity`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: ActivityType[] = await res.json();
  console.log(data);
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
        accountId={accountId}
        id={value.id}
        destination={value.destination}
        amount={value.amount}
        dated={value.dated}
        type={value.type}
      />
    </>
  ));
}
