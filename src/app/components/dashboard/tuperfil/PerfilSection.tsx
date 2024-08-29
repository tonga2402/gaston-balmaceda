import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import React from "react";
import { IoPencilSharp } from "react-icons/io5";

type userType = {
  dni: string;
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
  password:string
};

export default async function PerfilSection  ()  {

  const cookie = cookies();
  const tokenValue = cookie.get("Auth")?.value;
  const token = tokenValue?.replace(/['"]+/g, "")
  const user = jwtDecode<JwtPayload>(token as string);
  const userId = user.username as number;

  const res = await fetch(
    `${process.env.API_URL}/api/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data: userType = await res.json();

  return (
    <section>
      <div className="container_activity">
        <h2>Tus datos</h2>
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Email</label>
            <div className="card_input">
              <input type="text" placeholder={`${data.email}` }/>
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Nombre</label>
            <div className="card_input">
              <input type="text" placeholder={`${data.firstname}` } />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Apellido</label>
            <div className="card_input">
              <input type="text" placeholder={`${data.lastname}` }/>
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Telefono</label>
            <div className="card_input">
              <input type="text" placeholder={`${data.phone}` } />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="container_perfil">
          <div className="card_perfil">
            <label htmlFor="">Contrasena</label>
            <div className="card_input">
              <input type="password" placeholder={`${data.password}` } />
              <IoPencilSharp />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

