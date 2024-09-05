import Image from "next/image";
import Link from "next/link";
import Error from "@/app/UI-KIT/error.png";
import { CardServiceData } from "@/app/types/dashboard.types";

export default async function CardService({
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
    <section>
      <div className="container_initialPage">
        {data.invoice_value !== 0 ? (
          <div className="container_enter_amount">
            <h2>Número de cuenta sin el primer 2</h2>
            <input
              type="number"
              style={{ width: "450px", marginBottom: "10px" }}
            />
            <p>
              Son 11 números sin espacios, sin el “2” inicial. Agregá ceros
              adelante si tenés menos.{" "}
            </p>
            <div className="enter_amount_link">
              <Link
                href={`/dashboard/pagarservicios/${params.serviceId}/detalledepago`}
                className="select_card_button"
              >
                Continuar
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="container_enter_amount">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={Error} alt={""} />
                <h3 style={{ color: "white" }}>
                  No encontramos facturas asociadas a este dato
                </h3>
                <p style={{ width: "300px", textAlign: "center" }}>
                  Revisá el dato ingresado. Si es correcto, es posible que la
                  empresa aún no haya cargado tu factura.
                </p>
              </div>
            </div>
            <div style={{ marginTop: "25px" }}>
              <div className="enter_amount_link">
                <Link href={""} className="select_card_button">
                  Revisar Dato
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
