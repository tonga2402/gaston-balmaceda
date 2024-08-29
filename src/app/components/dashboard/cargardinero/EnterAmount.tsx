import Link from "next/link";

const EnterAmount = () => {
  return (
    <div className="container_enter_amount">
      <h2>¿Cuánto querés ingresar a la cuenta?</h2>
      <input type="text" placeholder="$0" />
      <div className="enter_amount_link">
        <Link href={""} className="select_card_button">
          Continuar
        </Link>
      </div>
    </div>
  );
};

export default EnterAmount;
