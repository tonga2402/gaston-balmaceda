'use client'
import { MESES } from "@/app/const/Month";
import { CardActivityProps } from "@/app/types/dashboard.types";
import Link from "next/link";

export default  function CardActivity({
  id,
  accountId,
  description,
  amount,
  dated,
}: CardActivityProps) {
  const newAmount = new Intl.NumberFormat('es-AR').format(amount)
  const newDay = new Date(dated)
  const day = newDay.getDate();
  const month = MESES[newDay.getMonth()];
  const year = newDay.getFullYear();

  return (
    <div key={id}>
      <Link
        href={`/dashboard/actividad/${accountId}/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card_activity">
          <div className="card_container">
            <div className="circle_activity"></div>
            <h5>
              {description}
            </h5>
          </div>
          <div className="div_price">
            <h5>$ {newAmount}</h5>
            <h6>{day} de {month} {year}</h6>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  );
}
