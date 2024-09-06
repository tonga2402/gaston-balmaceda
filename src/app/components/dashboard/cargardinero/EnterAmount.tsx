"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EnterAmount = () => {
  const [amount, setAmount] = useState<number>(0);
  const route = useRouter()

  const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleAmount = () => {
    localStorage.setItem('xamount',JSON.stringify(amount))
    route.push('/dashboard/cargardinero/ingresarmonto/deposito')
  }

  return (
    <div className="container_enter_amount">
      <h2>¿Cuánto querés ingresar a la cuenta?</h2>
      <input type="number" placeholder="$0" onChange={onChangeHandler} />
      <div className="enter_amount_link">
        <button className="select_card_button" onClick={handleAmount}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default EnterAmount;
