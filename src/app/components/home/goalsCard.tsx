import React from "react";
import ProgressSemiCircle from "../progressCircle";

export default function GoalsCard() {
  const date = new Date();
  return (
    <div className="basis-1/4 flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        goals
      </h2>
      <div className="bg-white text-secondary-color w-[100%] min-w-[325px] min-h-[200px] shadow-mix1 rounded-md p-3 max-w-[325px] max-h-[200px]">
        <div className="flex flex-row justify-between items-center mx-2 pb-2 border-b border-gray6">
          <h1 className="text-[22px] leading-[32px] text-default-black font-bold">
            $20000
          </h1>
          <span className="text-sm text-secondary-color font-medium capitalize px-1">
            {date.toDateString()}
          </span>
        </div>
        <div className="flex flex-row items-center justify-between my-3 px-3 min-h-max">
          <div className="flex flex-col justify-between min-h-max">
            <div className="flex flex-col my-2">
              <h2 className="text-sm font-semibold capitalize text-gray2">
                targets achieved:
              </h2>
              <span className="text-sm font-bold text-default-black my-1">
                $12500
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold capitalize text-gray2">
                this month's target:
              </h2>
              <span className="text-sm font-bold text-default-black my-1">
                $20000
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="pie">
              <span className="overlay"></span>
            </div>
            <div className="flex flex-row justify-between text-md mt-1 w-full">
              <span className="text-gray2 font-semibold">$0</span>
              <span className="text-secondary-color font-bold">$12k</span>
              <span className="text-gray2 font-semibold">$20k</span>
            </div>
            <p className="text-sm text-gray1 font-semibold">
              target vs achievement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
