import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline, IoPersonCircleOutline } from "react-icons/io5";

const SelectListCard = () => {
  return (
    <section>
      <div className="container_alias">
        <h3 style={{color:'var(--primary-color)'}}>Seleccionar tarjeta</h3>
        <div className="container_newcard">
          <div className="div_newcard">
            <div className="add_newcard">+</div>
            <h3 style={{color:'var(--primary-color)'}}>Nueva tarjeta</h3>
          </div>
          <Link
            href={"tarjetas/nuevatarjeta"}
            className="select_card_button"
          >
            Continuar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectListCard;
