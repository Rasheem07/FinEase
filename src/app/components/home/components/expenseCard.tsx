import React, { Component } from "react";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

interface ExpenseCardProps {
  imgURL: string;
  name: string;
  amount: number;
  rate: number;
  Arrow: React.ReactNode; 
  className: string// Assuming Arrow is a React component
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  imgURL,
  name,
  amount,
  rate,
  Arrow,
  className
}) => {
  return (
    <div className={`flex flex-row bg-transparent basis-1/4 justify-between ${className}`}>
      <div className="flex flex-row items-center h-full">
        <div className="flex flex-col items-center justify-center shadow-sm h-full bg-BG1 rounded-lg min-h-[40px] w-[40px]">
          <img src={imgURL} alt="" className="p-2" />
        </div>
        <div className="flex flex-col mx-3">
          <p className="text-xs text-gray2 font-medium capitalize">
            {name}
          </p>
          <h3 className="text-[16px] leading-[24px] font-bold text-default-black capitalize">
            ${amount.toFixed(2)}
          </h3>
          <span className="text-[12px] text-gray3 font-medium flex flex-row items-center">
            {rate}%*
            {Arrow}
          </span>
        </div>
      </div>
      <button className="text-xl font-sans bg-transparent my-auto">
        <EastIcon className="text-primary-color font-sans" />
      </button>
    </div>
  );
};

export default ExpenseCard;
