import { cookies } from "next/headers";
import { AccountType, ActivityType } from "@/app/types/dashboard.types";
import ActivityContainer from "./ActivityContainer";

type ShowActivitySectionProps = {
  params: string;
  filter?: string
};
export default async function ShowActivitySection({
  params,
  filter
}: ShowActivitySectionProps) {
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

  const filterSearch = dataActivity?.filter((data) =>
    data?.description.toLowerCase().includes(params)
  );

  const newFilter = new Date()
  const searchDay = newFilter.setDate(newFilter.getDate() - Number(filter))
  const newSearchFilter = filterSearch.filter(ele => new Date(ele.dated) > new Date(searchDay))

  return (

    <div className="container_activity">
      <h5>Tu actividad</h5>
      {!filter ?

        <ActivityContainer
          data={params ? filterSearch : dataActivity}
          accountId={data.id}
        />
        :
        <ActivityContainer
          data={newSearchFilter}
          accountId={data.id}
        />

      }
      <div className="div_arrow"></div>
    </div>

  );
}
