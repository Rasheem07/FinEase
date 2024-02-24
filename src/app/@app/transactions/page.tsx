"use client";
import { AppContext } from "@/app/contexts/cardContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Addtransation from "./addtransation";

export default function Page() {
  const [category, setcategory] = useState("all");

  const handleClick = async (value: string) => {
    setcategory(value);
  };

  const {isModal, setIsModal } = useContext(AppContext);

  const router = useRouter();
  return (
    <>
     <Addtransation />
     {isModal && 
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-BG1"></div>
     }
      <div className="mx-4 my-4 z-50">
        <div className=" flex flex-row items-center justify-between my-2 w-full">
          <h2 className="text-xl text-gray1 font-medium capitalize px-1 text-start">
            transactions
          </h2>
          <button
            className="py-1 px-4 bg-primary-color text-white rounded-md shadow-md outline-none text-md font-semibold mr-6"
            onClick={() => setIsModal(true)}
          >
            create transactions
          </button>
        </div>
        <div className="flex flex-col my-2">
          <div className="flex flex-row items-center text-secondary-color">
            <div className="min-w-[58px] flex flex-row justify-center">
              <span
                className={`text-[16px] leading-[24px] text-center font-bold ${
                  category === "all"
                    ? "border-b-[3px] border-primary-color"
                    : ""
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
            <tr className="p-3 md:mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray5 border-solid">
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
                <tr className="p-3 md:mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
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
                <tr className="p-3 md:mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
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
                <tr className="p-3 md:mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
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
                <tr className="p-3 md:mx-12 grid grid-cols-5 grid-rows-1 border-b border-gray6 border-solid">
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
    </>
  );
}
