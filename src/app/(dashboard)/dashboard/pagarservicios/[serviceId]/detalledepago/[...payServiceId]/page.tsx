import { DepositResponse } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

export default async function PayService({
  params,
}: {
  params: { payServiceId: string[] };
}) {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");
  const accountId = params.payServiceId[0];
  const id = params.payServiceId[1];
  const name = params.payServiceId[2];
  const carPay = params.payServiceId[3];

  const res = await fetch(
    `${process.env.API_URL}/api/accounts/${accountId}/transactions/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: DepositResponse = await res.json();
  const newDay = new Date(data.dated);
  const day = newDay.toLocaleDateString("es-AR");


  console.log(params)
  return (
    <div className="container_initialPage">
      <>
        <div className="div_amount_ok">
          <div className="div_new_amount">
            <div className="add_amount_icon">
              <IoCheckmarkSharp />
            </div>
            <h3>Ya realizaste tu pago</h3>
          </div>
        </div>
        <div className="container_register_amount_ok">
          <h4 style={{ marginBottom: "0px", fontWeight: "400" }}>{day}</h4>
          <h3>$ {Math.abs(data.amount)}</h3>
          <div>
            <h5>Para</h5>
            <h3>{name}</h3>
            {params.payServiceId.length === 4 ?
              <>
                <h4>Tarjeta</h4>
                <h5>************{carPay}</h5>
              </> :
              <></>
            }
          </div>
        </div>
        <div className="container_button_amount_ok">
          <Link href={"/dashboard/inicio"} className="amount_button">
            Ir al inicio
          </Link>
          <button className="amount_button_pdf">Descargar comprobante</button>
        </div>
      </>
    </div>
  );
}
