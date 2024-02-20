"use client";
import React, { useState } from "react";

export default function Page() {
  const [category, setcategory] = useState("all");

  const handleClick = async (value: string) => {
    setcategory(value);
  };
  return (
    <div className="mx-4 my-4">
      <h2 className="text-xl text-gray1 font-medium capitalize my-2 px-1 text-start">
        transactions
      </h2>
      <div className="flex flex-col my-2">
        <div className="flex flex-row items-center text-secondary-color">
          <div className="min-w-[58px] flex flex-row justify-center">
            <span
              className={`text-[16px] leading-[24px] text-center font-bold ${
                category === "all" ? "border-b-[3px] border-primary-color" : ""
              } cursor-pointer capitalize py-1 px-2 rounded-[2px]`}
              onClick={() => handleClick("all")}
            >
              all
            </span>
          </div>
          <div className="min-w-[58px] flex flex-row justify-center mx-4">
            <span
              className={`text-[16px] leading-[24px] text-center ${
                category === "revenue"
                  ? "border-b-[3px] border-primary-color"
                  : ""
              } cursor-pointer font-bold capitalize py-1 px-2`}
              onClick={() => handleClick("revenue")}
            >
              revenue
            </span>
          </div>
          <div className="min-w-[58px] flex flex-row justify-center">
            <span
              className={`text-[16px] leading-[24px] text-center font-bold  capitalize py-1 px-2 ${
                category === "expenses"
                  ? "border-b-[3px] border-primary-color"
                  : ""
              } cursor-pointer`}
              onClick={() => handleClick("expenses")}
            >
              expenses
            </span>
          </div>
        </div>

        <table className="my-4 mx-auto min-w-full py-6 bg-white rounded-lg shadow-mix1 transition-all">
          <tr className="p-3 mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray5 border-solid">
            <th className="text-start text-[16px] leading-[24px] text-default-black font-bold capitalize">
              items
            </th>
            <th className="text-start text-[16px] leading-[24px] text-default-black font-bold capitalize">
              shop name
            </th>
            <th className="text-start text-[16px] leading-[24px] text-default-black font-bold capitalize">
              date
            </th>
            <th className="text-start text-[16px] leading-[24px] text-default-black font-bold capitalize">
              payment method
            </th>
            <th className="text-start text-[16px] leading-[24px] text-default-black font-bold capitalize">
              amount
            </th>
          </tr>
          {category === "all" ? (
            <>
              <tr className="p-3 mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  GTR 5
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  gear & gadgets
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  20 feb 2024
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  Credit card
                </th>
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  $99
                </th>
              </tr>
              <tr className="p-3 mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  GTR 5
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  gear & gadgets
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  20 feb 2024
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  Credit card
                </th>
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  $99
                </th>
              </tr>
              <tr className="p-3 mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  GTR 5
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  gear & gadgets
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  20 feb 2024
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  Credit card
                </th>
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  $99
                </th>
              </tr>
              <tr className="p-3 mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  GTR 5
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  gear & gadgets
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  20 feb 2024
                </th>
                <th className="text-start text-sm text-gray1 font-medium capitalize">
                  Credit card
                </th>
                <th className="text-start text-[16px] leading-[24px] text-default-black font-semibold capitalize">
                  $99
                </th>
              </tr>
            </>
          ) : category === "revenue" ? (
            "revenue"
          ) : (
            "expenses"
          )}
        </table>
      </div>
    </div>
  );
}
