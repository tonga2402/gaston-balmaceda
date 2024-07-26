import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';

const Navbar = () => {

  return (
    <div className="navbar_container">
      <div className="links_container">
        <Link className="link" href={""}>
          <span>Inicio</span>
        </Link>
        <Link className="link" href={""}>
          <span>Actividad</span>
        </Link>
        <Link className="link" href={""}>
          <span>Tu perfil</span>
        </Link>
        <Link className="link" href={""}>
          <span>Cargar dinero</span>
        </Link>
        <Link className="link" href={""}>
          <span>Pagar Servicios</span>
        </Link>
        <Link className="link" href={""}>
          <span>Tarjetas</span>
        </Link>
        <LogoutButton/>
      </div>
    </div>
  );
}

export default Navbar
