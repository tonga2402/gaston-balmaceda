"use client";
import { DepositResponse, DepositsProps } from "@/app/types/dashboard.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCreateOutline } from "react-icons/io5";

const Deposits = ({ token, cvu, userId, id }: DepositsProps) => {
  const currentDate = new Date().toISOString();
  const newAmount = localStorage.getItem("xamount");
  const amount = Number(newAmount);
  const router = useRouter();

  const dataPost = {
    amount: amount,
    dated: currentDate,
    destination: cvu,
    origin: cvu,
  };

  const handleDeposite = async () => {
    localStorage.removeItem('xamount')
    const res = await fetch(
      `https://digitalmoney.digitalhouse.com/api/accounts/8/deposits`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(dataPost),
      }
    );
    const depositeData: DepositResponse = await res.json();

    router.push(
      `/dashboard/cargardinero/ingresarmonto/deposito/${amount}/${depositeData.account_id}/${depositeData.id}`
    );
    router.refresh();

    console.log(dataPost, depositeData);
  };

  return (
    <div className="container_register_amount">
      <h3 style={{ color: "var(--primary-color)" }}>
        Revisá que está todo bien
      </h3>
      <div className="register_amount_link">
        <h4>Vas a transferir</h4>
        <Link href={"/dashboard/cargardinero/ingresarmonto"}>
          <IoCreateOutline className="link_icon_amount" />
        </Link>
      </div>
      <h3>$ {newAmount}</h3>
      <div>
        <h5>Para</h5>
        <h3>Cuenta propia</h3>
        <h4>Brubank</h4>
        <h5>CVU {cvu}</h5>
      </div>
      <div className="enter_amount_link">
        <button className="select_card_button" onClick={handleDeposite}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Deposits;
