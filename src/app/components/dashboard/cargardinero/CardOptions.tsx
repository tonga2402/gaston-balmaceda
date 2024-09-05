"use client";
import { CardType, CardTypeProps } from "@/app/types/dashboard.types";
import { useState } from "react";
type CardOptionsProps = {
  data: CardType[];
};
export default function CardOptions({ data }: CardOptionsProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    localStorage.setItem("xcode", value);
  }

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
            <input
              type="radio"
              name="filter"
              value={data1.number_id}
              onChange={handleChange}
            />
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}
