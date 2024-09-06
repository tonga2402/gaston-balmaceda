import Deposits from "@/app/components/dashboard/cargardinero/Deposits";
import { AccountType } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";

export default async function RegisterAmount() {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");
  
  const res = await fetch(`${process.env.API_URL}/api/account`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data: AccountType = await res.json();

  return (
    <div className="container_initialPage">
      <Deposits
        token={token ? token : ''}
        cvu={data.cvu}
        userId={data.user_id}
        id={data.id}
      />
    </div>
  );
}
