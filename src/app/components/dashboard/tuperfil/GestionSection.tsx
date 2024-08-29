import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const GestionSection = () => {
  return (
    <section>
      <div className="container_gestion">
        <h2>Gestiona los medios de pago</h2>
        <Link href={"/dashboard/cargardinero"} style={{ color: "black" }}>
          <IoArrowForwardOutline style={{ fontSize: "25px" }} />
        </Link>
      </div>
    </section>
  );
};

export default GestionSection;
