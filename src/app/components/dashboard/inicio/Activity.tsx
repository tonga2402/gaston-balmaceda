import { ActivityType, CardTypeProps } from "@/app/types/dashboard.types";
import CardActivity from "./CardActivity";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import ActivityContainer from "../actividad/ActivityContainer";

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

  if (!data.length) {
    return (
      <>
        <hr />
      </>
    );
  }
  return (
    <>
      <ActivityContainer data={data} accountId={accountId} />
    </>
  );
}
