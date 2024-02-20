"use client";
import InputEdit from "@/app/components/InputEdit";
import Input from "@/app/components/input";
import ReadOnlyInput from "@/app/components/readOnlyInput";
import { AppContext } from "@/app/contexts/cardContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

export default function Page() {
  interface AccountType{
    bank: string,
    type: string,
    amount: number,
    branch: string,
    accountNo: number
  }

  const {accountDetails} = useContext(AppContext);
  const [Account, setAccount] = useState<AccountType>({bank: "", type: "",amount: 0,branch: "", accountNo: 0})

  useEffect(() => {
    setAccount({bank: localStorage.getItem('bank') as string, type: localStorage.getItem('type') as string,amount: parseInt(localStorage.getItem('amount') || '0'),branch:  localStorage.getItem('branch') as string, accountNo: parseInt(localStorage.getItem('accountNo') || '0')})
  }, [])

  return (
    <div className="min-h-[80vh] max-w-[75vw] my-2 mx-auto flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        account details
      </h2>
      <form
        className="p-4 flex-auto min-w-full max-h-[42vh] bg-white shadow-mix1 rounded-[4px]"
      >
        <div className="grid grid-cols-3 grid-flow-row">
          <ReadOnlyInput label="bank name" placeholder="bank name" value={Account.bank as string} />
          <ReadOnlyInput label="account type" placeholder="account type" value={Account.type as string} />
          <ReadOnlyInput label="balance" placeholder="current balance" value={Account.amount as number} />
          <ReadOnlyInput label="branch name" placeholder="branch name" value={Account.branch as string} />
          <ReadOnlyInput label="account number" placeholder="account number" value={Account.accountNo as number} />
        </div>
        <div className="flex flex-row items-center">
          <Link href={`/balances/edit/${accountDetails.accountNo}`}
            type="submit"
            className="py-2 px-5 bg-primary-color text-white text-sm my-2 font-semibold uppercase rounded-[4px] shadow-md"
          >
            edit details
          </Link>
          <button
            type="submit"
            className="text-secondary-color text-md my-2 ml-6 font-semibold uppercase"
          >
            remove
          </button>
        </div>
      </form>
    </div>
  );
}
