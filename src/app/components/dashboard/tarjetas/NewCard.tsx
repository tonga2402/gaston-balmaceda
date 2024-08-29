import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const NewCard = () => {
  return (
    <section>
      <div className="container_alias">
        <h4>Agrega tu tarjeta de debito o credito</h4>
        <div className="container_newcard">
          <div className="div_newcard">
            <div className="add_newcard">+</div>
            <h3>Nueva tarjeta</h3>
          </div>
          <Link
            href={"tarjetas/nuevatarjeta"}
            style={{ color: "var(--primary-color)" }}
          >
            <IoArrowForwardOutline style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewCard;
