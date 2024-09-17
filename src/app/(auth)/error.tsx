"use client";

import Link from "next/link";

const error = () => {
  return (
    <div className="container_initialPage">
      <div className="container_section">
        <h1>sesion caducada</h1>
        <Link
           className="button_grey"
           style={{ textDecoration: "none" , color:'white'}}
           href={"/login"}
        >
          Volver a loguearse
        </Link>
      </div>
    </div>
  );
};

export default error;
