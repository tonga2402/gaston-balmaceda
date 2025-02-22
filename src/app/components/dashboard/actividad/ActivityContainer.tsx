"use client";

import { ActivityType } from "@/app/types/dashboard.types";
import { usePathname } from "next/navigation";
import ActivityInicio from "./ActivityInicio";
import ActivityPagination from "./ActivityPagination";

type propsType = {
  data: ActivityType[];
  accountId: number;
};

const ActivityContainer = ({ data, accountId }: propsType) => {
  const dataReverse = data.sort(function (a, b) { return b.id - a.id })
  const dataActivityInicio = dataReverse.slice(0, 4);
  const route = usePathname();

  return (
    <>
      {route === "/dashboard/inicio" ? (
        <ActivityInicio data={dataActivityInicio} accountId={accountId} />
      ) : (
        <ActivityPagination data={dataReverse} accountId={accountId} />
      )}
    </>
  );
};

export default ActivityContainer;
