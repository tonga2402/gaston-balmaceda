import { ActivityType, UserType } from "@/app/types/dashboard.types";
import {jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoCheckmarkSharp } from "react-icons/io5";


interface Auth0JwtPayload extends JwtPayload {
  username: string;
  email: string;
  exp: number
}


export default async function ActivityDetail({
  params,
}: {
  params: { slug: string[] };
}) {
  const cookie = cookies();
  const authToken = cookie.get("Auth")?.value;
  const token = authToken?.replace(/['"]+/g, "") as string;
  const user = jwtDecode<Auth0JwtPayload>(token)
  const userId = user.username ;
  const accountId = params.slug[0];
  const id = params.slug[1];

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
  const data: ActivityType = await res.json();
  const newDay = new Date(data.dated);
  const day = newDay.toLocaleDateString("es-AR");

  const resUser = await fetch(`${process.env.API_URL}/api/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const dataUser: UserType = await resUser.json();

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
          <h5>Creada el {day}</h5>
        </div>
        <hr />
        <div className="activity_description">
          <h4>{data.description}</h4>
          <h3>${data.amount}</h3>
          <h4>Le {data.type} a</h4>
          <h3>
            {dataUser.firstname} {dataUser.lastname}
          </h3>
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
