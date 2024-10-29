import { cookies } from "next/headers";
import { AccountType, ActivityType } from "@/app/types/dashboard.types";
import ActivityContainer from "./ActivityContainer";

type ActivityShowFilterProps = {
  filter: string;
};
export default async function ActivityShowFilter({
  filter
}: ActivityShowFilterProps) {

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

  const dataReverse = dataActivity.sort((a, b) => b.id - a.id)
  const newFilter = new Date()
  const newDay = newFilter.setDate(newFilter.getDate() - Number(filter))
  const newSearchFilter = dataReverse.filter(ele => new Date(ele.dated) > new Date(newDay))



  return (

    <div className="container_activity">
      <h5>Tu actividad</h5>
      <ActivityContainer
        data={filter ? newSearchFilter : dataActivity}
        accountId={data.id}
      />
      <div className="div_arrow"></div>
    </div>

  );
}
