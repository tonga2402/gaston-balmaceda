import DeleteCardButton from "./DeleteCardButton";
import { CardType, CardTypeProps } from "@/app/types/dashboard.types";

export default async function Card(cardData: CardTypeProps) {
  const res = await fetch(
    `${process.env.API_URL}/api/accounts/${cardData.accountId}/cards`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cardData.token}`,
      },
    }
  );
  const data: CardType[] = await res.json();

  if (data.length === 0) {
    <></>;
  }
  return (
    <>
      {data?.map((data1) => (
        <div key={data1.id}>
          <div className="card_activity">
            <div className="card_container">
              <div className="circle_activity"></div>
              <h5>Terminada en {data1.number_id.toString().slice(12)} </h5>
            </div>
            <div className="div_price">
              <DeleteCardButton
                token={cardData.token}
                accountId={data1.account_id}
                cardId={data1.id}
              />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
