import Link from "next/link";
import { IoCheckmarkSharp } from "react-icons/io5";

const RegisterAmountOk = () => {
  return (
    <>
      <div className="div_amount_ok">
        <div className="div_new_amount">
          <div className="add_amount_icon">
            <IoCheckmarkSharp />
          </div>
          <h3>Ya cargamos el dinero en tu cuenta</h3>
        </div>
      </div>
      <div className="container_register_amount_ok">
        <h4 style={{ marginBottom: "0px", fontWeight: "400" }}>
          17 de agosto 2022 a 16:34 hs.
        </h4>
        <h3>$300</h3>
        <div>
          <h5>Para</h5>
          <h3>Cuenta propia</h3>
          <h4>Brubank</h4>
          <h5>CVU 00000000000212121221233312</h5>
        </div>
      </div>
      <div className="container_button_amount_ok">
        <Link href={"/dashboard/inicio"} className="amount_button">
          Ir al inicio
        </Link>
        <button className="amount_button_pdf">Descargar comprobante</button>
      </div>
    </>
  );
};

export default RegisterAmountOk;
