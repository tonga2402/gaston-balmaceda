import { CardActivityProps } from "@/app/types/dashboard.types";
import Link from "next/link";

export default async function CardActivity({
  id,
  accountId,
  destination,
  amount,
  dated,
  type,
}: CardActivityProps) {
  // const newDay = new Date(dated)
  // const day = newDay.getDay()

  return (
    <div key={id}>
      <hr />
      <Link
        href={`/dashboard/actividad/${accountId}/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card_activity">
          <div className="card_container">
            <div className="circle_activity"></div>
            <h5>
              {type} a {destination}
            </h5>
          </div>
          <div className="div_price">
            <h5>-$ {amount}</h5>
            <h6>{dated}</h6>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  );
}
