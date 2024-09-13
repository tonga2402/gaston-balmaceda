import { cookies } from "next/headers";
import Activity from "../inicio/Activity";
import { AccountType, ActivityType } from "@/app/types/dashboard.types";
import ActivityContainer from "./ActivityContainer";

type ShowActivitySectionProps = {
  params: string;
};
export default async function ShowActivitySection({ params }: ShowActivitySectionProps) {
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

  const resActivity = await fetch(
    `${process.env.API_URL}/api/accounts/${data.id}/activity`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const dataActivity: ActivityType[] = await resActivity.json();

  const filterSearch = dataActivity.filter((data)=> data.description.includes(params))
  console.log(filterSearch)

  return (
    <section>
      <div className="container_activity">
        <h5>Tu actividad</h5>
        {/* <Activity token={token ? token : ""} accountId={data.id} /> */}
        <ActivityContainer data={params ? filterSearch : dataActivity} accountId={data.id} />
        <div className="div_arrow"></div>
      </div>
    </section>
  );
}
