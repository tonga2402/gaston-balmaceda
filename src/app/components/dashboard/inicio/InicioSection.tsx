import { AccountType } from "@/app/types/dashboard.types";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function InicioSection() {
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
  const amount = data.available_amount
  const newAmount = new Intl.NumberFormat('es-AR',{maximumFractionDigits: 2}).format(amount)

  

  if (!res.ok) {
    return <></>
  }

  return (
    <div className="container_section">
      <div className="section_link">
        <Link className="link_dashboard" href={"/dashboard/tarjetas"}>
          Ver tarjetas
        </Link>
        <Link className="link_dashboard" href={"/dashboard/tuperfil"}>
          Ver CVU
        </Link>
      </div>
      <h4>Dinero disponible</h4>
      <h2>$ {newAmount}</h2>
    </div>
  );
}
