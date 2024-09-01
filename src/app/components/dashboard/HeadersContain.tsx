"use client";
import Link from "next/link";

import { useState } from "react";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import LogoutButton from "./LogoutButton";

type HeadersContainProps = {
  dataFirstName: string;
  dataLastName: string;
};

const HeadersContain = ({
  dataFirstName,
  dataLastName,
}: HeadersContainProps) => {
  const firstName = dataFirstName;
  const lastName = dataLastName;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="show_menu" onClick={handleShow}>
        {showMenu ? <IoIosClose /> : <IoMdMenu />}
      </div>
      {showMenu && (
        <div className="container_menu_mobile">
          <div className="div_menu_mobile">
            <Link
              className="link_mobile"
              onClick={handleShow}
              href={"/dashboard/inicio"}
            >
              <span>Inicio</span>
            </Link>
            <Link
              className="link_mobile"
              onClick={handleShow}
              href={"/dashboard/actividad"}
            >
              <span>Actividad</span>
            </Link>
            <Link
              className="link_mobile"
              onClick={handleShow}
              href={"/dashboard/tuperfil"}
            >
              <span>Tu perfil</span>
            </Link>
            <Link
              className="link_mobile"
              onClick={handleShow}
              href={"/dashboard/cargardinero"}
            >
              <span>Cargar dinero</span>
            </Link>
            <Link
              className="link_mobile"
              onClick={handleShow}
              href={"/dashboard/pagarservicios"}
            >
              <span>Pagar Servicios</span>
            </Link>
            <Link
              className="link_mobile"
              onClick={handleShow}
              href={"/dashboard/tarjetas"}
            >
              <span>Tarjetas</span>
            </Link>
            <div className="link_mobile">
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
      <p>Hola,</p>
      <Link className="link_dashboard" href={"/dashboard"}>
        {firstName} {lastName}
      </Link>
    </>
  );
};

export default HeadersContain;
