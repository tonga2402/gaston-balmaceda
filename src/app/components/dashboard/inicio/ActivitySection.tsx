import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { cookies } from "next/headers";
import Activity from "./Activity";
import { AccountType } from "@/app/types/dashboard.types";

export default async function ActivitySection() {
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
    <>
      <div className="container_activity">
        <h5>Tu actividad</h5>
        <Activity token={token ? token : ""} accountId={data.id} /> 

        <div className="div_arrow">
          <h5>Ver toda tu actividad</h5>
          <Link href={"/dashboard/actividad"} style={{ color: "black" }}>
            <IoArrowForwardOutline style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
    </>
  );
}
