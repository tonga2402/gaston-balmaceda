import { CardType, CardTypeProps } from "@/app/types/dashboard.types";

export default async function CardOptions(cardData: CardTypeProps) {
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
                Terminada en {data1.number_id.toString().slice(12)}
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
