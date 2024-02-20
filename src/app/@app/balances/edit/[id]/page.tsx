"use client"
import InputEdit from "@/app/components/InputEdit";
import { AppContext } from "@/app/contexts/cardContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function Page() {
 const {accountDetails} = useContext(AppContext);
 const router = useRouter();

 const handleCreateAccount = async (data: FormData) => {
    const id = localStorage.getItem('accountID');
    const bank =  localStorage.getItem('bank') as string;
    const branch =  data.get('branch')?.valueOf() as string;
    const type = data.get('account')?.valueOf() as string;
    const accountNo = parseInt(data.get('accountNo')?.valueOf() as string);
    const totalAmount = parseFloat(data.get('balance')?.valueOf() as string);

    const response = await fetch('/api/card/editcard', {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token') as string
      },
      body: JSON.stringify({
        id: id, bank, branch, type, accountNo, totalAmount
      })
    })
    await response.json()
    router.push(`/balances/account/${localStorage.getItem('accountNo') as string}`)
  }
  return (
    <div className="min-h-[80vh] max-w-[75vw] my-2 mx-auto flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        account details
      </h2>
      <form action={handleCreateAccount} className="p-4 flex-auto min-w-full max-h-[42vh] bg-white shadow-mix1 rounded-[4px]">
        <div className="grid grid-cols-3 grid-flow-row">
          <InputEdit label="bank" placeholder="Enter the bank name" value={localStorage.getItem('bank') as string} property="bank"/>
          <InputEdit label="type" placeholder="Enter the account type" value={localStorage.getItem('type') as string} property="type"/>
          <InputEdit label="balance" placeholder="Enter the current balance" value={localStorage.getItem('amount') as string} property="amount"/>
          <InputEdit label="branch" placeholder="Enter the branch name" value={localStorage.getItem('branch') as string} property="branch"/>
          <InputEdit label="accountNo" placeholder="Enter the account number" value={localStorage.getItem('accountNo') as string} property="accountNo"/>
        </div>
      <button type="submit" className="py-2 px-6 bg-primary-color text-white text-sm my-2 font-semibold uppercase rounded-[4px] shadow-md">save changes</button>
      </form>
    </div>
  );
}
