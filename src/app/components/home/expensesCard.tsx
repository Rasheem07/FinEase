import React from "react";
import ExpenseCard from "./components/expenseCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HR from "../hr";

export default function ExpensesCard() {
  return (
    <div className="w-full">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        expenses breakdown
      </h2>
      <div className="flex flex-row justify-center items-center w-full min-h-[200px] bg-white text-secondary-color shadow-mix1 rounded-md px-6">
        <div className="flex flex-row flex-wrap justify-around ">
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="border-r border-gray6 px-4 py-2"
            Arrow={<ArrowDownwardIcon className="max-h-4 max-w-4 mx-2 text-green" />}
          />
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="border-r border-gray6 px-4 py-2"
            Arrow={<ArrowDownwardIcon className="max-h-4 max-w-4 mx-2 text-green" />}
          />
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="px-4 py-2"
            Arrow={<ArrowUpwardIcon className="max-h-4 max-w-4 mx-2 text-red" />}
          />
          <HR />
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="border-r border-gray6 px-4 py-2"
            Arrow={<ArrowDownwardIcon className="max-h-4 max-w-4 mx-2 text-green" />}
          />
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="border-r border-gray6 px-4 py-2"
            Arrow={<ArrowUpwardIcon className="max-h-4 max-w-4 mx-2 text-red" />}
          />
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className=" px-4 py-2"
            Arrow={<ArrowDownwardIcon className="max-h-4 max-w-4 mx-2 text-green" />}
          />
        </div>
      </div>
    </div>
  );
}
