import { DepositResponse } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoCheckmarkSharp } from "react-icons/io5";
import {MESES} from '@/app/const/Month'

const page = async ({ params }: { params: { amountSlug: string[] } }) => {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "");
  const amount = params.amountSlug[0];
  const accountId = params.amountSlug[1];
  const id = params.amountSlug[2];


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
  const day = newDay.getDay();
  const month = MESES[newDay.getMonth()];
  const year = newDay.getFullYear();
  const hours = newDay.getHours();
  const min = newDay.getMinutes();

  return (
    <div className="container_initialPage">
      <>
        <div className="div_amount_ok">
          <div className="div_new_amount">
            <div className="add_amount_icon">
              <IoCheckmarkSharp />
            </div>
            <h3>Ya cargamos el dinero en tu cuenta</h3>
          </div>
        </div>
        <div className="container_register_amount_ok">
          <h4 style={{ marginBottom: "0px", fontWeight: "400" }}>{day} de {month}
          {year} a {hours}:{min} hs.</h4>
          <h3>
            $ {amount}
          </h3>
          <div>
            <h5>Para</h5>
            <h3>Cuenta propia</h3>
            <h4>Brubank</h4>
            <h5>CVU {data.origin}</h5>
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
};

export default page;
