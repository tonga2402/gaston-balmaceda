"use client";
import { UserType } from "@/app/types/dashboard.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoPencilSharp } from "react-icons/io5";
import { toast } from "sonner";

type FormPerfilProps = {
  user: UserType;
  token: string;
};
const FormPerfil = ({ user, token }: FormPerfilProps) => {
  const router = useRouter()
  const [disabledDni , setDisabledDni] = useState<boolean>(true)
  const [disabledEmail , setDisabledEmail] = useState<boolean>(true)
  const [disabledFirst , setDisabledFirst] = useState<boolean>(true)
  const [disabledLast , setDisabledLast] = useState<boolean>(true)
  const [disabledPhone , setDisabledPhone] = useState<boolean>(true)
  const [values, setValue] = useState({
    dni: "",
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  const userPatch = async () => {
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body:JSON.stringify({
        dni: Number(values.dni),
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        phone: values.phone,
      })
    });
    const data: UserType = await res.json();
    toast.success('Perfil Actualizado')
    router.refresh()

    console.log(data)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };
  const handleUser = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      userPatch()
    }
  };
  return (
    <div className="container_activity">
      <h2>Tus datos</h2>
      <div className="container_perfil">
        <div className="card_perfil" >
          <label htmlFor="">Email</label>
          <div className="card_input">
            <input
              type="text"
              placeholder={user.email}
              name="email"
              value={values.email}
              onChange={onChangeHandler}
              disabled={disabledEmail}
              onKeyDown={handleUser}
            />
            <IoPencilSharp onClick={()=> {setDisabledEmail(false)}}/>
          </div>
        </div>
      </div>
      <hr />
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Nombre</label>
          <div className="card_input">
            <input
              type="text"
              placeholder={user.firstname}
              onChange={onChangeHandler}
              name="firstname"
              value={values.firstname}
              disabled={disabledFirst}
              onKeyDown={handleUser}
            />
            <IoPencilSharp onClick={()=> {setDisabledFirst(false)}}/>
          </div>
        </div>
      </div>
      <hr />
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Apellido</label>
          <div className="card_input">
            <input
              type="text"
              placeholder={user.lastname}
              name="lastname"
              value={values.lastname}
              onChange={onChangeHandler}
              disabled={disabledLast}
              onKeyDown={handleUser}
            />
            <IoPencilSharp onClick={()=> {setDisabledLast(false)}}/>
          </div>
        </div>
      </div>
      <hr />
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">DNI</label>
          <div className="card_input">
            <input
              type="text"
              placeholder={user.dni}
              name="dni"
              value={values.dni}
              onChange={onChangeHandler}
              disabled={disabledDni}
              onKeyDown={handleUser}
            />
            <IoPencilSharp onClick={()=> {setDisabledDni(false)}}/>
          </div>
        </div>
      </div>
      <hr />
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Telefono</label>
          <div className="card_input">
            <input
              type="text"
              placeholder={user.phone}
              name="phone"
              value={values.phone}
              onChange={onChangeHandler}
              disabled={disabledPhone}
              onKeyDown={handleUser}
            />
            <IoPencilSharp onClick={()=> {setDisabledPhone(false)}}/>
          </div>
        </div>
      </div>
      <hr />
      <div className="container_perfil">
        <div className="card_perfil">
          <label htmlFor="">Contrasena</label>
          <div className="card_input">
            <input type="password" placeholder={"******"} disabled={true}/>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FormPerfil;
