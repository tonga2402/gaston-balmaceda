"use client";
import { ActivityType } from "@/app/types/dashboard.types";
import CardActivity from "../inicio/CardActivity";
import { useState } from "react";
import Pagination from "./Pagination";

type propsType = {
  data: ActivityType[];
  accountId: number;
};
const ActivityPagination = ({ data, accountId }: propsType) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activityPerPage, setActivityPerPage] = useState<number>(10);

  const lastActivityIndex = currentPage * activityPerPage;
  const firstActivityIndex = lastActivityIndex - activityPerPage;
  const currentPost = data.slice(firstActivityIndex, lastActivityIndex);

  return (
    <>
      {currentPost.map((info) => (
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
      <Pagination
        totalActivity={data.length}
        activityPerPage={activityPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ActivityPagination;
