"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AccountType,
  DepositResponse,
  FormServiceProps,
} from "@/app/types/dashboard.types";
import { useRouter } from "next/navigation";

const FormService = ({
  name,
  invoiceValue,
  token,
  accountId,
  children,
}: FormServiceProps) => {
  const router = useRouter();
  const currentDate = new Date().toISOString();

  const [dataService, setDataService] = useState({
    amount: -invoiceValue,
    dated: currentDate,
    description: name,
  });


  const handleTransaction = async () => {
    const cardPay = (localStorage.getItem("xcode"))
    try {
      const res = await fetch(
        `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/transactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(dataService),
        }
      );
      const transactionData: DepositResponse = await res.json();
      router.push(
        `detalledepago/${accountId}/${transactionData.id}/${name}/${cardPay}`
      );
    } catch (error) {}
  };
  const handleTransactionAccount = async () => {
    try {
      const res = await fetch(
        `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/transactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(dataService),
        }
      );
      const transactionData: DepositResponse = await res.json();
      router.push(
        `detalledepago/${accountId}/${transactionData.id}/${name}`
      );
    } catch (error) {}
  };





  const handleAccount = async () => {
    try {
      const res = await fetch(
        `https://digitalmoney.digitalhouse.com/api/account`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const transactionAccount: AccountType = await res.json();
      if (transactionAccount.available_amount >= invoiceValue) {
        handleAccount()
      }
   
    } catch (error) {}
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
          <button className="select_card_button" onClick={handleTransactionAccount}>Pagar con cuenta</button>
        </div>{" "}
        <div className="enter_amount_link">
          <button className="select_card_button" onClick={handleTransaction}>
            Pagar con tarjeta
          </button>
        </div>
      </div>
    </>
  );
};
export default FormService;
