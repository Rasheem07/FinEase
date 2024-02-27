"use client";
import BalanceCardDetailed from "@/app/components/balances/balanceCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Balances() {

  const [cards, setCards] = useState([]);

  let authtoken: string;

  useEffect(() => {
   authtoken = localStorage.getItem("token") as string
  }, [])
  const fetchCards = async () => {
    const response = await fetch("/api/card/fetchcards", {
      cache: "default",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.stringify(authtoken)
      },
    });
    const json = await response.json();
    setCards(json);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="mx-4 my-4">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        balances
      </h2>
      <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-3">
        {cards.map((card: any) => (
          <BalanceCardDetailed
            key={card.id}
            id={card.id}
            type={card.type}
            bank={card.bank}
            branch={card.branch}
            accountNo={card.accountNo}
            amount={card.totalAmount}
            fetchCard={fetchCards}
          />
        ))}
        <div className="min-w-[250px] min-h-[200px] bg-white shadow-mix1 rounded-md basis-1/4 flex flex-col items-center justify-center">
          <div className="flex flex-col w-[60%]">
            <Link
              href="/balances/create"
              className="text-[16px] leading-[24px] font-bold text-white text-center bg-primary-color py-2 capitalize rounded-[4px] shadow-md"
            >
              add account
            </Link>
            <button className="text-[16px] leading-[24px] text-gray3 font-semibold text-center  capitalize my-2">
              edit account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
