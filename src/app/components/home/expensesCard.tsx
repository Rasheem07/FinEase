import React from "react";
import ExpenseCard from "./components/expenseCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HR from "../hr";

export default function ExpensesCard() {
  return (
    <div className=" w-full max-w-[90vw]">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        expenses breakdown
      </h2>
      <div className=" max-w-[90vw] w-full min-h-[200px] bg-white text-secondary-color shadow-mix1 rounded-md lg:px-6">
        <div className=" divide-gray5 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2 md:gap-4 lg:gap-5 py-3">
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="px-4 py-2"
            Arrow={<ArrowDownwardIcon className="max-h-4 max-w-4 mx-2 text-green" />}
          />
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="px-4 py-2"
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
          {/* <HR /> */}
          <ExpenseCard
            imgURL="gamepad.png"
            name="housing"
            amount={150}
            rate={15}
            className="px-4 py-2"
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
