import React from "react";

export default function Page() {
  return (
    <div className="mx-4 my-4">
      <h2 className="text-xl text-gray1 font-medium capitalize my-2 px-1 text-start">
        upcomming bills
      </h2>
      <div className="my-4  min-w-full py-4 bg-white rounded-lg shadow-mix1 transition-all max-w-full px-6">
        <div className="px-4 flex flex-row justify-between py-2 items-center min-w-full border-b border-gray6 border-solid max-w-full">
          <span className="text-[16px] leading-[24px] font-bold text-default-black capitalize">
            due date
          </span>
          <span className="text-[16px] leading-[24px] font-bold text-default-black capitalize">
            item
          </span>
          <span className="basis-[25%] self-center text-[16px] leading-[24px] font-bold text-default-black capitalize">
            item description
          </span>
          <span className="basis-[20%] self-center text-[16px] leading-[24px] font-bold text-default-black capitalize">
            last charge
          </span>
          <span className="text-[16px] leading-[24px] font-bold text-default-black capitalize">
            amount
          </span>
        </div>
        <div className="flex flex-row justify-between px-4 py-4 items-center min-w-full border-b border-gray6 border-solid max-w-full">
          <span className="flex flex-col bg-BG1 rounded-md shadow-inner max-w-[44px] max-h-[66px] min-w-[44px] min-h-[66px] items-center justify-center">
            <span className="text-xs text-gray1 font-sans">May</span>
            <span className="text-[22px] leading-[32px] text-default-black font-bold">
              15
            </span>
          </span>
          <span className="text-[16px] pl-5 leading-[24px] font-bold text-secondary-color capitalize ">
            figma
          </span>
          <span className="basis-[25%]">
            <h3 className="text-sm font-bold text-default-black capitalize">
              figma - yearly plan
            </h3>
            <p className="text-xs font-medium text-gray3">
              for advanced security and more flexible controls, the proffesional
              plan helps you scale design processes company-wide
            </p>
          </span>
          <span className="text-[16px] leading-[24px] font-semibold text-gray2 capitalize basis-[20%]">
            19 may 2024
          </span>
          <button className="flex flex-col items-center justify-center bg-transparent border-2 border-gray5 px-3 py-1 rounded-md shadow-sm">
            <span className="text-[16px] leading-[24px] font-bold">$150</span>
          </button>
        </div>
        <div className="flex flex-row justify-between px-4 py-4 items-center min-w-full border-b border-gray6 border-solid max-w-full">
          <span className="flex flex-col bg-BG1 rounded-md shadow-inner max-w-[44px] max-h-[66px] min-w-[44px] min-h-[66px] items-center justify-center">
            <span className="text-xs text-gray1 font-sans">May</span>
            <span className="text-[22px] leading-[32px] text-default-black font-bold">
              15
            </span>
          </span>
          <span className="text-[16px] pl-5 leading-[24px] font-bold text-secondary-color capitalize ">
            figma
          </span>
          <span className="basis-[25%]">
            <h3 className="text-sm font-bold text-default-black capitalize">
              figma - yearly plan
            </h3>
            <p className="text-xs font-medium text-gray3">
              for advanced security and more flexible controls, the proffesional
              plan helps you scale design processes company-wide
            </p>
          </span>
          <span className="text-[16px] leading-[24px] font-semibold text-gray2 capitalize basis-[20%]">
            19 may 2024
          </span>
          <button className="flex flex-col items-center justify-center bg-transparent border-2 border-gray5 px-3 py-1 rounded-md shadow-sm">
            <span className="text-[16px] leading-[24px] font-bold">$150</span>
          </button>
        </div>
      </div>
    </div>
  );
}
