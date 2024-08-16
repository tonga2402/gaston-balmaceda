import Link from "next/link";
import { IoArrowForwardOutline, IoPersonCircleOutline } from "react-icons/io5";

const BankTransfer = () => {
  return (
    <section>
      <div className="container_alias">
        <div className="container_newcard">
          <div className="div_transfer">
            <IoPersonCircleOutline />
            <h6>Transferencia bancaria</h6>
          </div>
          <Link
            href={"cargardinero/transferenciabancaria"}
            style={{ color: "var(--primary-color)" }}
          >
            <IoArrowForwardOutline style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BankTransfer;
