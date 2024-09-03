import Deposits from "@/app/components/dashboard/cargardinero/Deposits";
import { AccountType } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";

export default async function RegisterAmount({
  params,
}: {
  params: { amount: number};
}) {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");
  const amountNumber = params.amount

  const res = await fetch(`${process.env.API_URL}/api/account`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data: AccountType = await res.json();
  console.log(amountNumber);
  return (
    <div className="container_initialPage">
      <Deposits
        token={token ? token : ''}
        amount={amountNumber}
        cvu={data.cvu}
        userId={data.user_id}
        id={data.id}
      />
    </div>
  );
}
