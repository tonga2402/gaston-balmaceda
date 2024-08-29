import SelectCardOptions from "@/app/components/dashboard/cargardinero/SelectCardOptions";
import { CardServiceData } from "@/app/types/dashboard.types";
import Link from "next/link";

export default async function PaiService({
  params,
}: {
  params: { serviceId: number };
}) {
  const res = await fetch(
    `${process.env.API_URL}/service/${params.serviceId}`,
    {
      method: "GET",
    }
  );
  const data: CardServiceData = await res.json();

  return (
    <div className="container_initialPage">
      <div className="container_pai_service">
        <div className="div_pai_service">
          <h2>{data.name}</h2>
          <Link className="link_dashboard" href={"/dashboard/tarjetas"}>
            Ver detalles del pago
          </Link>
        </div>
        <hr />
        <div className="div_pai_service">
          <h3>Total a pagar</h3>
          <h3>${data.invoice_value}</h3>
        </div>
      </div>
      <SelectCardOptions />
      <div style={{ marginTop: "25px" }}>
        <div className="enter_amount_link">
          <Link href={""} className="select_card_button">
            Pagar
          </Link>
        </div>
      </div>
    </div>
  );
}
