import React from "react";

type CardTypeProps = {
  token: string;
  accountId: number;
};
type CardType = {
  account_id: number;
  cod: number;
  expiration_date: "string";
  first_last_name: "string";
  id: number;
  number_id: number;
};

export default async function Card(cardData: CardTypeProps) {
  const res = await fetch(
    `https://digitalmoney.digitalhouse.com/api/accounts/${cardData.accountId}/cards`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cardData.token}`,
      },
    }
  );
  const data: CardType[] = await res.json();
  console.log(data);
  if (data.length === 0) {
    <></>;
  }
  return (
    <>
      {data.map((data1) => (
        <div key={data1.id}>
          <div className="card_activity">
            <div className="card_container">
              <div className="circle_activity"></div>
              <h5>Terminada en {(data1.number_id).toString().slice(12)} </h5>
            </div>
            <div className="div_price">
              <button>Eliminar</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
