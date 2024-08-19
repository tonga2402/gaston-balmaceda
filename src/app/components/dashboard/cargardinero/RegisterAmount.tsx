import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";

const RegisterAmount = () => {
  return (
    <div className="container_register_amount">
      <h3 style={{ color: "var(--primary-color)" }}>
        Revisá que está todo bien
      </h3>
      <div className="register_amount_link">
        <h4>Vas a transferir</h4>
        <Link href={""}>
          <IoCreateOutline className="link_icon_amount" />
        </Link>
      </div>
      <h3>$300</h3>
      <div>
        <h5>Para</h5>
        <h3>Cuenta propia</h3>
        <h4>Brubank</h4>
        <h5>CVU 00000000000212121221233312</h5>
      </div>
      <div className="enter_amount_link">
        <Link href={""} className="select_card_button">
          Continuar
        </Link>
      </div>
    </div>
  );
};

export default RegisterAmount;
