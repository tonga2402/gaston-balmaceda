"use client";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cardForm from "@/app/schemes/cardForm.scheme";
import React, { useState } from "react";

type CardData = {
  cod: number;
  expiration_date: string;
  first_last_name: string;
  number_id: number;
};

const NuevaTarjeta = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus:e.target.name
    })
  }

  const onSubmit = ( data:CardData) => {
  }

  return (
    <div className="container_newCard">
      <Cards cvc={cvc} expiry={expiry} name={name} number={number} focused={cardData.focus as any} />

      <form onSubmit={()=> onSubmit}>
        <div className="form_newCard">
          <div className="div_newCard">
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Numero de la tarjeta*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre y apellido*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="div_newCard">
            <input
              type="text"
              name="expiry"
              id="expiry"
              placeholder="Fecha de vencimiento*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder="Codigo de seguridad*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <button>Continuar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NuevaTarjeta;
