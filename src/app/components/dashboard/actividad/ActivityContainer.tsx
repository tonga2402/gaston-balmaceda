'use client'
import CardActivity from "../inicio/CardActivity";
import { ActivityType } from "@/app/types/dashboard.types";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

type propsType = {
  data: ActivityType[];
  accountId: number;
};

const ActivityContainer =  ({ data, accountId }: propsType) => {
const [ state , setState] = useState()
const route = usePathname()
console.log(route)
  return (
    <>
      {/* {data.map((info) => (
        <div key={info.id}>
          <CardActivity
            accountId={accountId}
            id={info.id}
            destination={info.destination}
            amount={info.amount}
            dated={info.dated}
            type={info.type}
            description={info.description}
          />
        </div>
      ))} */}
    </>
  );
};

export default ActivityContainer;
