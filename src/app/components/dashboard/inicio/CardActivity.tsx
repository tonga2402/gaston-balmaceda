import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import React from "react";

type ActivityType = {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
};

type CardActivityProps = {
  id: number;
  destination: string;
  amount: number;
  dated: string;
};

export default async function CardActivity({
  id,
  destination,
  amount,
  dated,
}: CardActivityProps) {
  return (
    <div key={id}>
      <hr />
      <div className="card_activity">
        <div className="card_container">
          <div className="circle_activity"></div>
          <h5>Trasferiste a {destination}</h5>
        </div>
        <div className="div_price">
          <h5>-$ {amount}</h5>
          <h6>{dated}</h6>
        </div>
      </div>
      <hr />
    </div>
  );
}
