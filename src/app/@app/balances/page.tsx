'use client'
import BalanceCardDetailed from "@/app/components/balances/balanceCard";
import { fetchCards } from "@/app/services/fetchCards";
import Link from "next/link";
import React from "react";

export default async function Balances() {

  const Cards = await fetchCards(); 

  return (
      <div className="mx-4 my-4">
        <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
          balances
        </h2>
        <div className="grid grid-flow-row grid-cols-3 gap-3">
          {Cards.map((card: any) => (
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
              <button
                className="text-[16px] leading-[24px] text-gray3 font-semibold text-center  capitalize my-2"
              >
                edit account
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
