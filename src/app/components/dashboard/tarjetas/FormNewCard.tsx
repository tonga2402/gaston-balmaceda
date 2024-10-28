"use client";

import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { CardType, CardTypeProps } from "@/app/types/dashboard.types";

const FormNewCard = ({ token, accountId }: CardTypeProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataOk, setDataOk] = useState<boolean>(false);
  const [cardData, setCardData] = useState({
    number: 0,
    name: "",
    expiry: "",
    cvc: 0,
    focus: "",
  });

  const { number, name, expiry, cvc } = cardData;

  const newExpiry = expiry.slice(0, 2) + "/20" + expiry.slice(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: e.target.name,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true);
    const newCard = {
      cod: Number(cvc),
      expiration_date: newExpiry,
      first_last_name: name,
      number_id: Number(number),
    };

    try {
      const res = await fetch(
        `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(newCard),
        }
      );
      const data: CardType = await res.json();

      setLoading(false);
      setDataOk(true);
      router.push('/dashboard/tarjetas')
      router.refresh()
    } catch (error) {}
  };
  return (
    <>
      <Cards
        cvc={cvc}
        expiry={expiry}
        name={name}
        number={number}
        focused={cardData.focus as any}
      />

      <form onSubmit={onSubmit}>
        <div className="form_newCard">
          <div className="div_newCard">
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Numero de la tarjeta*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              minLength={16}
              maxLength={16}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre y apellido*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              maxLength={30}
              minLength={6}
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
              required
              minLength={4}
              maxLength={4}
            />
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder="Codigo de seguridad*"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              minLength={3}
              maxLength={3}
            />
            <button
              style={{ backgroundColor: `${dataOk && "var(--primary-color)"}` }}
            >
              {" "}
              {loading ? (
                <BeatLoader color="black" size={10} />
              ) : (
                `${dataOk ? "OK" : "Continuar"}`
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormNewCard;
