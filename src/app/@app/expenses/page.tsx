"use client"
import HR from "@/app/components/hr";
import { ArrowUpward } from "@mui/icons-material";
import React from "react";

export default function Page() {
  return (
    <div className="mx-4 my-4">
      <h2 className="text-xl text-gray1 font-medium capitalize my-2 px-1 text-start">
        upcomming bills
      </h2>
      <div className="my-4 min-h-64 min-w-full py-4 bg-white rounded-lg shadow-mix1 transition-all max-w-full px-6">
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

      <div className="my-4">
        <h2 className="text-xl text-gray1 font-medium capitalize my-2 px-1 text-start">
          expenses breakdown
        </h2>
        <div className="flex flex-row flex-wrap justify-around gap-6">
          <div className="bg-white basis-[30%] shadow-mix1 rounded-md flex flex-col">
            <div className="p-3 bg-gray5 backdrop-blur-md flex flex-row items-center justify-between rounded-t-md">
              <div className="flex flex-row items-center">
                <div className="flex flex-col h-[40px] w-[40px] bg-gray4 p-2 rounded-md shadow-inner">
                  <img src="gamepad.png" alt="game" />
                </div>
                <div className="flex flex-col mx-3">
                  <p className="text-[16px] leading-none font-medium tracking-wider capitalize text-gray1">
                    housing
                  </p>
                  <h3 className="text-lg font-bold text-default-black capitalize">
                    $999
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray1 font-semibold flex flex-row items-center">
                  15% <ArrowUpward className="text-red" />
                </span>
                <p className="text-gray2 text-xs font-bold">
                  compare to last month
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6 border-b border-gray6 border-solid">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white basis-[30%] shadow-mix1 rounded-md flex flex-col">
            <div className="p-3 bg-gray5 backdrop-blur-md flex flex-row items-center justify-between rounded-t-md">
              <div className="flex flex-row items-center">
                <div className="flex flex-col h-[40px] w-[40px] bg-gray4 p-2 rounded-md shadow-inner">
                  <img src="gamepad.png" alt="game" />
                </div>
                <div className="flex flex-col mx-3">
                  <p className="text-[16px] leading-none font-medium tracking-wider capitalize text-gray1">
                    housing
                  </p>
                  <h3 className="text-lg font-bold text-default-black capitalize">
                    $999
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray1 font-semibold flex flex-row items-center">
                  15% <ArrowUpward className="text-red" />
                </span>
                <p className="text-gray2 text-xs font-bold">
                  compare to last month
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6 border-b border-gray6 border-solid">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white basis-[30%] shadow-mix1 rounded-md flex flex-col">
            <div className="p-3 bg-gray5 backdrop-blur-md flex flex-row items-center justify-between rounded-t-md">
              <div className="flex flex-row items-center">
                <div className="flex flex-col h-[40px] w-[40px] bg-gray4 p-2 rounded-md shadow-inner">
                  <img src="gamepad.png" alt="game" />
                </div>
                <div className="flex flex-col mx-3">
                  <p className="text-[16px] leading-none font-medium tracking-wider capitalize text-gray1">
                    housing
                  </p>
                  <h3 className="text-lg font-bold text-default-black capitalize">
                    $999
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray1 font-semibold flex flex-row items-center">
                  15% <ArrowUpward className="text-red" />
                </span>
                <p className="text-gray2 text-xs font-bold">
                  compare to last month
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6 border-b border-gray6 border-solid">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white basis-[30%] shadow-mix1 rounded-md flex flex-col">
            <div className="p-3 bg-gray5 backdrop-blur-md flex flex-row items-center justify-between rounded-t-md">
              <div className="flex flex-row items-center">
                <div className="flex flex-col h-[40px] w-[40px] bg-gray4 p-2 rounded-md shadow-inner">
                  <img src="gamepad.png" alt="game" />
                </div>
                <div className="flex flex-col mx-3">
                  <p className="text-[16px] leading-none font-medium tracking-wider capitalize text-gray1">
                    housing
                  </p>
                  <h3 className="text-lg font-bold text-default-black capitalize">
                    $999
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray1 font-semibold flex flex-row items-center">
                  15% <ArrowUpward className="text-red" />
                </span>
                <p className="text-gray2 text-xs font-bold">
                  compare to last month
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6 border-b border-gray6 border-solid">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white basis-[30%] shadow-mix1 rounded-md flex flex-col">
            <div className="p-3 bg-gray5 backdrop-blur-md flex flex-row items-center justify-between rounded-t-md">
              <div className="flex flex-row items-center">
                <div className="flex flex-col h-[40px] w-[40px] bg-gray4 p-2 rounded-md shadow-inner">
                  <img src="gamepad.png" alt="game" />
                </div>
                <div className="flex flex-col mx-3">
                  <p className="text-[16px] leading-none font-medium tracking-wider capitalize text-gray1">
                    housing
                  </p>
                  <h3 className="text-lg font-bold text-default-black capitalize">
                    $999
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray1 font-semibold flex flex-row items-center">
                  15% <ArrowUpward className="text-red" />
                </span>
                <p className="text-gray2 text-xs font-bold">
                  compare to last month
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6 border-b border-gray6 border-solid">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white basis-[30%] shadow-mix1 rounded-md flex flex-col">
            <div className="p-3 bg-gray5 backdrop-blur-md flex flex-row items-center justify-between rounded-t-md">
              <div className="flex flex-row items-center">
                <div className="flex flex-col h-[40px] w-[40px] bg-gray4 p-2 rounded-md shadow-inner">
                  <img src="gamepad.png" alt="game" />
                </div>
                <div className="flex flex-col mx-3">
                  <p className="text-[16px] leading-none font-medium tracking-wider capitalize text-gray1">
                    housing
                  </p>
                  <h3 className="text-lg font-bold text-default-black capitalize">
                    $999
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray1 font-semibold flex flex-row items-center">
                  15% <ArrowUpward className="text-red" />
                </span>
                <p className="text-gray2 text-xs font-bold">
                  compare to last month
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6 border-b border-gray6 border-solid">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 justify-between px-6">
              <h3 className="text-lg font-semibold text-secondary-color capitalize">
                house rent
              </h3>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-default-black capitalize">$9999</span>
                <span className="text-sm font-medium text-gray2 capitalize">19 feb 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
