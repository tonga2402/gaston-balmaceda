"use client";
import { UserType } from "@/app/types/dashboard.types";
import React, { useState } from "react";
import { IoPencilSharp } from "react-icons/io5";

type FormPerfilProps = {
  user: UserType;
  token: string;
};
const FormPerfil = ({ user, token }: FormPerfilProps) => {
  const [profile, setProfile] = useState<UserType>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleUser = async () => {};
  return (
    <div className="container_activity">
      <h2>Tus datos</h2>
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Email</label>
          <div className="card_input">
            <input type="text" placeholder={user.email} />
          </div>
        </div>
      </div>
      <hr />{" "}
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Nombre</label>
          <div className="card_input">
            <input type="text" placeholder={user.firstname} />
            <IoPencilSharp />
          </div>
        </div>
      </div>
      <hr />{" "}
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Apellido</label>
          <div className="card_input">
            <input type="text" placeholder={user.lastname} />
            <IoPencilSharp />
          </div>
        </div>
      </div>
      <hr />
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Telefono</label>
          <div className="card_input">
            <input type="text" placeholder={`${user.phone}`} />
            <IoPencilSharp />
          </div>
        </div>
      </div>
      <hr />{" "}
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Contrasena</label>
          <div className="card_input">
            <input type="password" placeholder={"******"} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FormPerfil;
