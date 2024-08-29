import Link from "next/link";

const ButtonSection = () => {
  return (
    <section className="container_service">
      <div className="button_service">
        <Link className="button_link" href={"/dashboard/cargardinero"}>
          Cargar dinero
        </Link>
      </div>

      <div className="button_service">
        <Link className="button_link" href={"/dashboard/pagarservicios"}>
          Pago de servicios
        </Link>
      </div>
    </section>
  );
};

export default ButtonSection;
