import React from "react";
import TransactionCard from "./components/TransactionCard";

export default function TransactionsCard() {
  return (
    <div className="basis-1/4 flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        recent transactions
      </h2>
      <div className="bg-white text-secondary-color w-[100%] min-w-[325px] min-h-[542px] max-w-[325px] max-h-[542px] shadow-mix1 rounded-md flex flex-col p-5">
        <div className="flex flex-row justify-between items-center">
          <div className="min-w-[58px] flex flex-row justify-center">
            <span className="text-[16px] leading-[24px] text-center font-bold border-b-[3px] border-primary-color capitalize py-1 px-2 rounded-[2px]">
              all
            </span>
          </div>
          <div className="min-w-[58px] flex flex-row justify-center">
            <span className="text-[16px] leading-[24px] text-center font-bold capitalize py-1 px-2">
              revenue
            </span>
          </div>
          <div className="min-w-[58px] flex flex-row justify-center">
            <span className="text-[16px] leading-[24px] text-center font-bold  capitalize py-1 px-2">
              expenses
            </span>
          </div>
        </div>

        <div className="flex flex-col overflow-y-scroll my-5 scroll-hide">
          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>

          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>

          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>

          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>

          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>

          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>

          <TransactionCard
            imgURL="gamepad.png"
            name="GTR 5"
            desc="gadget & gear"
            amount={150}
            date="13 feb 2023"
          />
          <span className="w-full h-[1px] bg-gray6 my-2"></span>
        </div>
      </div>
    </div>
  );
}
