import { cookies } from "next/headers";
import Activity from "../inicio/Activity";
import { AccountType } from "@/app/types/dashboard.types";

export default async function ShowActivitySection() {
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
    <section>
      <div className="container_activity">
        <h5>Tu actividad</h5>
        <Activity token={token ? token : ""} accountId={data.id} />
        <div className="div_arrow"></div>
      </div>
    </section>
  );
}
