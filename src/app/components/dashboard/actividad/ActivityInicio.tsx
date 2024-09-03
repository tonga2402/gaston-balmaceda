'use client'
import { ActivityType } from "@/app/types/dashboard.types";
import CardActivity from "../inicio/CardActivity";

type propsType = {
  data: ActivityType[];
  accountId: number;
};
const ActivityInicio = ({ data, accountId }: propsType) => {
  console.log(data);
  return (
    <>
      {data.map((info) => (
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
      ))}
    </>
  );
};

export default ActivityInicio;
