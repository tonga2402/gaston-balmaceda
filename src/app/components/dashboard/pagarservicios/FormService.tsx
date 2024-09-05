"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DepositResponse, FormServiceProps } from "@/app/types/dashboard.types";

const FormService = ({
  name,
  invoiceValue,
  token,
  accountId,
  children,
}: FormServiceProps) => {
  const currentDate = new Date().toISOString();
    const [dataService, setDataService] = useState({
      amount: invoiceValue,
      dated: "string",
      description: "string",
    });
  const handleTransaction = async () => {
    const res = await fetch(
      `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(""),
      }
    );
    const transactionData: DepositResponse = await res.json();
  };
  return (
    <>
      <div className="container_pai_service">
        <div className="div_pai_service">
          <h2>{name}</h2>
          <Link className="link_dashboard" href={"/dashboard/tarjetas"}>
            Ver detalles del pago
          </Link>
        </div>
        <hr />
        <div className="div_pai_service">
          <h3>Total a pagar</h3>
          <h3>${invoiceValue}</h3>
        </div>
      </div>
      {children}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <div className="enter_amount_link">
          <Link href={""} className="select_card_button">
            Pagar con cuenta
          </Link>
        </div>{" "}
        <div className="enter_amount_link">
          <Link href={""} className="select_card_button">
            Pagar con tarjeta
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormService;
