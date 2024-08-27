import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

type ActivityType = {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
};

export default async function ActivityDetail({
  params,
}: {
  params: { slug: string[] };
}) {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");
  const accountId = params.slug[0];
  const id = params.slug[1];

  const res = await fetch(
    `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/transactions/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: ActivityType = await res.json();
  console.log(data)
  return (
    <div className="container_initialPage">
      <div className="container_background">
        <div className="div_new_activity">
          <div className="activity_title">
            <div className="add_activity_icon">
              <IoCheckmarkSharp />
            </div>
            <h3>Aprobada</h3>
          </div>
          <h5>Creada el {data.dated}.</h5>
        </div>
        <hr/>
        <div className="activity_description">
          <h4>{data.description}</h4>
          <h3>${data.amount}</h3>
          <h4>Le {data.type} a</h4>
          <h3>Rodrigo Vaccaro</h3>
          <h4>Número de operación</h4>
          <h3>{data.id}</h3>
        </div>
      </div>
      <div className="container_button_amount_ok">
        <Link href={"/dashboard/inicio"} className="amount_button">
          Ir al inicio
        </Link>
        <button className="amount_button_pdf">Descargar comprobante</button>
      </div>
    </div>
  );
}