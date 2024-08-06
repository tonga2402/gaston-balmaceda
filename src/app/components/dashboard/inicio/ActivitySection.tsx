import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import CardActivity from "./CardActivity";
import { cookies } from "next/headers";
import Activity from "./Activity";

type AccountType = {
  alias: "string";
  available_amount: number;
  cvu: "string";
  id: number;
  user_id: number;
};

export default async function ActivitySection() {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");

  const res = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
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
        <div className="div_arrow">
          <h5>Ver toda tu activida</h5>
          <Link href={""} style={{ color: "black" }}>
            <IoArrowForwardOutline style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
