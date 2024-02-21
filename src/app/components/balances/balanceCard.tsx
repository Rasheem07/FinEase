"use client";
import React, { useContext, useEffect } from "react";
import HR from "../hr";
import { East } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { AppContext } from "@/app/contexts/cardContext";
import { revalidateTag } from "next/cache";

export default function BalanceCardDetailed({
  id,
  type,
  bank,
  branch,
  accountNo,
  amount,
  fetchCard,
}: {
  id: string;
  type: string;
  bank: string;
  branch: string;
  accountNo: number;
  amount: number;
  fetchCard: any;
}) {
  const {accountDetails, setaccountDetails } = useContext(AppContext);

  const handleDeleteCard = async () => {
    const response = await fetch("../api/card/removecard", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") as string,
      },
      body: JSON.stringify({ id: id as string }),
    });
    const json = await response.json();
    if (response.ok) {
      fetchCard();
    } else {
      console.log(json.error);
    }
  };

  const handleDetails = async () => {
    await setaccountDetails({
      id,
      type,
      bank,
      branch,
      accountNo,
      amount,
    });
    if (typeof window !== 'undefined') {
      // Access localStorage here  
      localStorage.setItem("accountID", id);
      localStorage.setItem("bank", bank);
      localStorage.setItem("branch", branch);
      localStorage.setItem("type", type);
      localStorage.setItem("accountNo", accountNo.toString());
      localStorage.setItem("amount", amount.toString());
    }
    };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage here
      localStorage.setItem("accountID", accountDetails.id);
      localStorage.setItem("bank", accountDetails.bank);
      localStorage.setItem("branch", accountDetails.branch);
      localStorage.setItem("type", accountDetails.type);
      localStorage.setItem("accountNo", accountDetails.accountNo.toString());
      localStorage.setItem("amount", accountDetails.amount.toString());
    }
    }, [accountDetails]);
    
  
  return (
    <div className=" bg-white shadow-mix1 rounded-md p-4">
      <div className="flex flex-row items-center justify-between my-1">
        <h3 className="text-[16px] leading-[24px] font-bold capitalize">
          {type}
        </h3>
        <span className="text-xs text-gray1 font-medium mr-2">{bank}</span>
      </div>
      <HR />
      <div className="flex flex-col">
        <div className="flex-flex-col justify-between my-1">
          <h4
            id="accountNo"
            className="text-[20px] leading-[28px] text-default-black font-semibold"
          >
            {accountNo}
          </h4>
          <label
            htmlFor="accountNo"
            className="text-xs text-gray3 font-medium capitalize"
          >
            account number
          </label>
        </div>
        <div className="flex-flex-col justify-between my-1">
          <h4
            id="amount"
            className="text-[20px] leading-[28px] text-default-black font-semibold"
          >
            ${amount}
          </h4>
          <label
            htmlFor="amount"
            className="text-xs text-gray3 font-medium capitalize"
          >
            total amount
          </label>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button
          onClick={handleDeleteCard}
          className="text-[16px] leading-[24px] font-semibold text-primary-color capitalize"
        >
          remove
        </button>
        <Link
          onClick={handleDetails}
          href={`/balances/account/${accountNo}`}
          className="py-1 px-4 text-[16px] leading-[24px] flex flex-row justify-center font-semibold text-white bg-primary-color capitalize rounded-[4px] shadow-sm"
        >
          details <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
}
