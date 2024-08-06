import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';

const Navbar = () => {

  return (
    <div className="navbar_container">
      <div className="links_container">
        <Link className="link" href={"/dashboard/inicio"}>
          <span>Inicio</span>
        </Link>
        <Link className="link" href={"/dashboard/actividad"}>
          <span>Actividad</span>
        </Link>
        <Link className="link" href={"/dashboard/tuperfil"}>
          <span>Tu perfil</span>
        </Link>
        <Link className="link" href={"/dashboard/cargardinero"}>
          <span>Cargar dinero</span>
        </Link>
        <Link className="link" href={"/dashboard/pagarservicios"}>
          <span>Pagar Servicios</span>
        </Link>
        <Link className="link" href={"/dashboard/tarjetas"}>
          <span>Tarjetas</span>
        </Link>
        <LogoutButton/>
      </div>
    </div>
  );
}

export default Navbar
