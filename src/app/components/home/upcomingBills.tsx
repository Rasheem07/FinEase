import React from "react";

export default function UpcomingBills() {
  return (
    <div className="basis-1/4 flex flex-col">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        upcomming bills
      </h2>
      <div className="bg-white text-secondary-color w-[100%] min-w-[325px] min-h-[200px] max-w-[325px] max-h-[200px] shadow-mix1 rounded-md flex flex-col justify-center items-center">
        <div className="flex flex-row items-center my-1 justify-between">
          <div className="flex flex-row items-center">
            <div className="flex flex-col bg-BG1 rounded-md shadow-inner min-w-[44px] min-h-[66px] items-center justify-center">
              <span className="text-xs text-gray1 font-sans">May</span>
              <span className="text-[22px] leading-[32px] text-default-black font-bold">
                15
              </span>
            </div>
            <div className="flex flex-col mx-4">
              <h4 className="text-sm text-gray1 font-medium capitalize">
                figma
              </h4>
              <p className="text-[16px] leading-[24px] font-bold text-secondary-color capitalize">
                figma - monthly
              </p>
              <p className="text-xs font-semibold text-gray3 capitalize">
                Last Charge - 14 May, 2022
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent border-2 border-gray5 px-3 py-1 rounded-md shadow-sm">
            <span className="text-[16px] leading-[24px] font-bold">$150</span>
          </div>
        </div>
        <span className="w-full h-[1px] bg-gray6 my-2"></span>
        <div className="flex flex-row items-center my-1 justify-between">
          <div className="flex flex-row items-center">
            <div className="flex flex-col bg-BG1 rounded-md shadow-inner min-w-[44px] min-h-[66px] items-center justify-center">
              <span className="text-xs text-gray1 font-sans">May</span>
              <span className="text-[22px] leading-[32px] text-default-black font-bold">
                15
              </span>
            </div>
            <div className="flex flex-col mx-4">
              <h4 className="text-sm text-gray1 font-medium capitalize">
                figma
              </h4>
              <p className="text-[16px] leading-[24px] font-bold text-secondary-color capitalize">
                figma - monthly
              </p>
              <p className="text-xs font-semibold text-gray3 capitalize">
                Last Charge - 14 May, 2022
              </p>
            </div>
          </div>
          <button className="flex flex-col items-center justify-center bg-transparent border-2 border-gray5 px-3 py-1 rounded-md shadow-sm">
            <span className="text-[16px] leading-[24px] font-bold">$150</span>
          </button>
        </div>
      </div>
    </div>
  );
}
