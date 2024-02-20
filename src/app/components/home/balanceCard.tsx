import React from "react";

export default function BalanceCard() {
  return (
    <div className="basis-1/4 flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        total balances
      </h2>
      <div className="bg-white text-secondary-color w-[100%] min-w-[325px] min-h-[200px] max-w-[325px] max-h-[200px] shadow-mix1 rounded-md p-3">
        <div className="flex flex-row justify-between items-center mx-2 mb-2 border-b border-gray6">
          <h1 className="text-[22px] leading-[32px] text-default-black font-bold">
            $99999
          </h1>
          <span className="text-sm text-secondary-color font-medium capitalize">
            all accounts
          </span>
        </div>
        <div className="min-h-[96px] my-3 mx-auto rounded-sm bg-primary-color px-5 py-1">
          <div className="my-2">
            <p className="text-sm font-medium text-gray5 capitalize">account type</p>
            <h3 className="text-[16px] leading-[24px] font-semibold text-white capitalize">credit card</h3>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-1">
          <span className="text-sm font-medium text-default-black capitalize">{"<"} previous</span>
          <span className="text-sm font-medium text-default-black capitalize">next {">"}</span>
        </div>
      </div>
    </div>
  );
}
