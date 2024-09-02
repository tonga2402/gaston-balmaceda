"use client";
import Link from "next/link";
import { useState } from "react";

const EnterAmount = () => {
  const [amount, setAmount] = useState<number>(0);

  const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.valueAsNumber)
  }

  return (
    <div className="container_enter_amount">
      <h2>¿Cuánto querés ingresar a la cuenta?</h2>
      <input type="number" placeholder="$0" onChange={onChangeHandler} />
      <div className="enter_amount_link">
        <Link href={`/dashboard/cargardinero/ingresarmonto/${amount}`} className="select_card_button">
          Continuar
        </Link>
      </div>
    </div>
  );
};

export default EnterAmount;
