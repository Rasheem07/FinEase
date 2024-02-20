import React, { ReactPropTypes } from "react";

export default function TransactionCard({
  imgURL,
  name,
  desc,
  amount,
  date,
}: {
  imgURL: string;
  name: string;
  desc: string;
  amount: number;
  date: string;
}) {
  return (
    <div className="flex flex-row items-center justify-between w-full min-h-[60px] bg-transparent px-2 py-3">
      <div className="flex flex-row items-center">
        <div className="flex flex-col h-[40px] w-[40px] bg-BG1 p-2 rounded-md shadow-inner">
          <img src={imgURL} alt={name} />
        </div>
        <div className="flex flex-col mx-3">
          <h4 className="text-[16px] leading-[24px] font-semibold text-default-black capitalize">
            {name}
          </h4>
          <p className="text-sm text-gray3 font-sans capitalize">{desc}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[16px] leading-[24px] font-semibold text-secondary-color">
          ${amount}
        </span>
        <span className="text-xs font-medium text-gray3 capitalize">
          {date}
        </span>
      </div>
    </div>
  );
}
