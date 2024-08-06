import Link from "next/link";
import React from "react";

const ButtonSection = () => {
  return (
    <section className="container_service">
      <div className="button_service">
        <Link className="button_link" href={""}>
          Cargar dinero
        </Link>
      </div>

      <div className="button_service">
        <Link className="button_link" href={""}>
          Pago de servicios
        </Link>
      </div>
    </section>
  );
};

export default ButtonSection;
