"use client"
import Input from "@/app/components/input";
import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  const handleCreateAccount = async (data: FormData) => {
    const bank =  data.get('bank name')?.valueOf() as string;
    const branch =  data.get('branch name')?.valueOf() as string;
    const type = data.get('account type')?.valueOf() as string;
    const accountNo = parseInt(data.get('account number')?.valueOf() as string);
    const totalAmount = parseFloat(data.get('balance')?.valueOf() as string);

    let authtoken;
    if (typeof window !== 'undefined') {
      // Access localStorage here
      authtoken= localStorage.getItem('token') as string
    }
    
    const response = await fetch('/api/card/addcard', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "auth-token": JSON.stringify(authtoken)
      },
      body: JSON.stringify({
        bank, branch, type, accountNo, totalAmount
      })
    })
    await response.json();
    router.push('/balances')
  }
  return (
    <div className="min-h-[80vh] max-w-[75vw] my-2 mx-auto flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        account details
      </h2>
      <form action={handleCreateAccount} className="p-4 flex-auto min-w-full max-h-[42vh] bg-white shadow-mix1 rounded-[4px]">
        <div className="grid grid-cols-3 grid-flow-row">
          <Input label="bank name" placeholder="Enter the bank name"/>
          <Input label="account type" placeholder="Enter the account type"/>
          <Input label="balance" placeholder="Enter the current balance"/>
          <Input label="branch name" placeholder="Enter the branch name"/>
          <Input label="account number" placeholder="Enter the account number"/>
        </div>
      <button type="submit" className="py-2 px-6 bg-primary-color text-white text-sm my-2 font-semibold uppercase rounded-[4px] shadow-md">create account</button>
      </form>
    </div>
  );
}
