"use client";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";

const nuevaTarjeta = () => {
  return (
    <div className="container_newCard">
      <Cards cvc={""} expiry={""} name={""} number={""} />

      <form action="">
        <div>
          <div>
            <input type="text" name="number" id="number" placeholder="Numero de la tarjeta*"/>
            <input type="text" name="name" id="name" placeholder="Nombre y apellido*" />
          </div>
          <div>
            <input type="text" name="expiry" id="expiry" placeholder="Fecha de vencimiento*"/>
            <input type="text" name="cvc" id="cvc" placeholder="Codigo de seguridad*"/>
          </div>
          <button>Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default nuevaTarjeta;
