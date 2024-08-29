import Link from "next/link";
import SelectCardOptions from "./SelectCardOptions";

const SelectListCard = () => {
  return (
    <section>
      <div className="container_alias">
        <h3 style={{ color: "var(--primary-color)" }}>Seleccionar tarjeta</h3>
        <SelectCardOptions />
        <div className="container_newcard" style={{ marginTop: "20px" }}>
          <div className="div_newcard">
            <div className="add_newcard">+</div>
            <Link
              style={{ textDecoration: "none" }}
              href={"/dashboard/tarjetas/nuevatarjeta"}
            >
              <h3 style={{ color: "var(--primary-color)" }}>Nueva tarjeta</h3>
            </Link>
          </div>
          <Link
            href={"/dashboard/cargardinero/ingresarmonto"}
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
