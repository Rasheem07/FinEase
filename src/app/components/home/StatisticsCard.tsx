import React from "react";
import HR from "../hr";

export default function StatisticsCard() {
  return (
    <div className="w-full">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        statistics
      </h2>
      <div className="w-full min-h-[250px] bg-white text-secondary-color shadow-mix1 rounded-md py-3 px-6">
        <div className="flex flex-row items-center justify-between px-1">
          <select
            name="comparisontime"
            id="comparisontime"
            className="text-[16px] leading-[24px] font-bold capitalize text-default-black outline-none"
          >
            <option value="">monthly comparison</option>
            <option value="">weekly comparison</option>
            <option value="">daily comparison</option>
          </select>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center mx-2">
              <span className="w-[25px] h-[15px] bg-primary-color rounded-sm shadow-sm mx-2"></span>
              <p className="text-gray2 text-sm font-semibold capitalize">
                this week
              </p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <span className="w-[25px] h-[15px] bg-gray5 rounded-sm shadow-sm mx-2"></span>
              <p className="text-gray2 text-sm font-semibold capitalize">
                last week
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full my-4 relative">
          <div className=" flex flex-col justify-between items-end max-h-[150px]">
            <span className="text-[16px] leading-[18px] font-semibold text-gray3 px-2">
              $250k
            </span>
            <span className="text-[16px] leading-[18px] font-semibold text-gray3 px-2">
              $50k
            </span>
            <span className="text-[16px] leading-[18px] font-semibold text-gray3 px-2">
              $10k
            </span>
            <span className="text-[16px] leading-[18px] font-semibold text-gray3 px-2">
              $2k
            </span>
            <span className="text-[16px] leading-[18px] font-semibold text-gray3 px-2">
              $0
            </span>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col justify-between min-h-[150px]">
              <HR />
              <HR />
              <HR />
              <HR />
              <span className="inline-block w-full h-[1px] bg-gray6 my-2"></span>
            </div>
            <div className="flex flex-row items-center w-full justify-between px-5 relative h-full">
              <div className="flex flex-col h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 h-16 bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 min-h-[90px] bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  17 sun
                </span>
              </div>
              <div className="flex flex-col min-h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 min-h-[120px] relative bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 h-24 bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  18 mon
                </span>
              </div>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 h-16 bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 h-[100px] bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  19 tue
                </span>
              </div>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 h-[80px] bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 h-[70px] bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  20 wed
                </span>
              </div>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 h-16 bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 h-24 bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  21 thu
                </span>
              </div>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 h-[60px] bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 h-[85px] bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  22 fri
                </span>
              </div>
              <div className="flex flex-col h-full relative">
                <div className="flex flex-row min-h-[150px] absolute justify-between items-end bottom-8">
                  <div className="min-w-4 h-[110px] bg-gray5 shadow-sm rounded-t-sm rounded-none mx-1"></div>
                  <div className="min-w-4 h-[95px] bg-primary-color shadow-sm rounded-t-sm mx-1"></div>
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-gray3 capitalize">
                  23 sat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
