import Link from 'next/link'
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosCard } from "react-icons/io";

const SelectCard = () => {
  return (
    <section>
    <div className="container_alias">
      <div className="container_newcard">
        <div className="div_transfer">
          <IoIosCard />
          <h6>Seleccionar tarjeta</h6>
        </div>
        <Link
          href={"cargardinero/seleccionartarjeta"}
          style={{ color: "var(--primary-color)" }}
        >
          <IoArrowForwardOutline style={{ fontSize: "25px" }} />
        </Link>
      </div>
    </div>
  </section>
  )
}

export default SelectCard