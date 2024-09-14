import { CardServiceData } from "@/app/types/dashboard.types";
import Link from "next/link";

type ServiceSectionProps = {
  params: string;
};
export default async function ServiceSection({ params }: ServiceSectionProps) {
  const res = await fetch(`${process.env.API_URL}/service`, {
    method: "GET",
  });

  const data: CardServiceData[] = await res.json();

  const filterService = data.filter((data)=> data.name.includes(params))
 const serviceData = params ? filterService : data 
  console.log(filterService)

  return (
    <section>
      <div className="container_activity">
        <h4>Mas recientes</h4>
        <hr />
        {serviceData.map((data1) => (
          <div key={data1.id}>
            <div className="card_activity">
              <div className="card_container">
                <h5 style={{ margin: "4px" }}>{data1.name} </h5>
              </div>
              <div className="div_price">
                <Link
                  href={`/dashboard/pagarservicios/${data1.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5 style={{ fontWeight: "500" }}>Seleccionar</h5>
                </Link>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
