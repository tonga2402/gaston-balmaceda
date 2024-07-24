import Link from 'next/link'
import React from 'react'

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
        <Link className="link" href={""}>
          <span>Cerrar sesión</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar
