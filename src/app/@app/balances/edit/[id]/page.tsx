"use client";
import InputEdit from "@/app/components/InputEdit";
import { AppContext } from "@/app/contexts/cardContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function Page() {
  const { accountDetails } = useContext(AppContext);
  const router = useRouter();

  const handleCreateAccount = async (data: FormData) => {
    let id, bank, token;

    if (typeof window !== "undefined") {
      id = localStorage.getItem("accountID");
      bank = localStorage.getItem("bank") as string;
      token= localStorage.getItem("token") as string;
    }
    
    const branch = data.get("branch")?.valueOf() as string;
    const type = data.get("account")?.valueOf() as string;
    const accountNo = parseInt(data.get("accountNo")?.valueOf() as string);
    const totalAmount = parseFloat(data.get("balance")?.valueOf() as string);

    const response = await fetch("/api/card/editcard", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.stringify(token)
      },
      body: JSON.stringify({
        id,
        bank,
        branch,
        type,
        accountNo,
        totalAmount,
      }),
    });
    await response.json();
    if (typeof window !== "undefined") {
      router.push(
        `/balances/account/${localStorage.getItem("accountNo") as string}`
      );
    }
  };
  return (
    <div className="max-w-[90vw] md:max-w-[75vw] my-2 mx-auto flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        account details
      </h2>
      <form
        action={handleCreateAccount}
        className="p-4 flex-auto min-w-full bg-white shadow-mix1 rounded-[4px]"
      >
        <div className="grid md:grid-cols-3 grid-cols-1  grid-flow-row">
          <InputEdit
            label="bank"
            placeholder="Enter the bank name"
            value={
              typeof window !== "undefined"
                ? (localStorage.getItem("bank") as string)
                : ""
            }
            property="bank"
          />
          <InputEdit
            label="type"
            placeholder="Enter the account type"
            value={typeof window !== "undefined"? localStorage.getItem("type") as string : ""}
            property="type"
          />
          <InputEdit
            label="balance"
            placeholder="Enter the current balance"
            value={typeof window !== "undefined"? localStorage.getItem("amount") as string: ''}
            property="amount"
          />
          <InputEdit
            label="branch"
            placeholder="Enter the branch name"
            value={typeof window !== "undefined"? localStorage.getItem("branch") as string : ''}
            property="branch"
          />
          <InputEdit
            label="accountNo"
            placeholder="Enter the account number"
            value={typeof window !== "undefined"? localStorage.getItem("accountNo") as string: ''}
            property="accountNo"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-6 bg-primary-color text-white text-sm mt-6 mb-2 md:my-2 font-semibold uppercase rounded-[4px] shadow-md"
        >
          save changes
        </button>
      </form>
    </div>
  );
}
