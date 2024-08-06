import Link from "next/link";
import React from "react";

const InicioSection = () => {
  return (
    <section className="container_section">
      <div className="section_link">
        <Link className="link_dashboard" href={""}>
          Ver tarjetas
        </Link>
        <Link className="link_dashboard" href={""}>
          Ver CVU
        </Link>
      </div>
      <h4>Dinero disponible</h4>
      <h2>$ 6.890.534,17</h2>
    </section>
  );
};

export default InicioSection;
