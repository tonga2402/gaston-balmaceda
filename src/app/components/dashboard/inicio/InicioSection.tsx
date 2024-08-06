import { cookies } from "next/headers";
import Link from "next/link";

type accountType = {
  alias: "string";
  available_amount: number;
  cvu: "string";
  id: number;
  user_id: number;
};


export default async function InicioSection () {

  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "")

  const res = await fetch(
    `https://digitalmoney.digitalhouse.com/api/account`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: accountType = await res.json();

  if (!data) {
    return <></>;
  }

  return (
    <section className="container_section">
      <div className="section_link">
        <Link className="link_dashboard" href={"/dashboard/tarjetas"}>
          Ver tarjetas
        </Link>
        <Link className="link_dashboard" href={"/dashboard/tuperfil"}>
          Ver CVU
        </Link>
      </div>
      <h4>Dinero disponible</h4>
      <h2>$ {data.available_amount}</h2>
    </section>
  );
};

