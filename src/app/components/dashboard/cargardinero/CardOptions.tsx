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

export default async function CardOptions(cardData: CardTypeProps) {
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
          <div className="card_options_container">
            <div className="div_card_options">
              <div className="circle_activity"></div>
              <label style={{ color: "black" }}>
                Terminada en {(data1.number_id).toString().slice(12)}
              </label>
            </div>
            <input type="radio" id="3" name="filter" />
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
