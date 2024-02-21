"use client"
import React from "react";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function Page() {
  return (
    <div className="w-full mx-4 my-4">
      <h2 className="text-xl text-gray2 font-medium capitalize my-2 px-1 text-start">
        goals
      </h2>
      <div className="flex flex-row items-center w-full">
        <div className="basis-[30%] bg-white text-secondary-color w-[100%] min-w-[325px] min-h-[200px] shadow-mix1 rounded-md p-3">
          <div className="flex flex-row justify-between items-center mx-2 pb-2 border-b border-gray6">
            <h1 className="text-lg text-default-black font-semibold capitalize">
              savings goal
            </h1>
            <div className="px-3 bg-gray5 rounded-md">
              <select className="text-sm text-secondary-color font-medium capitalize bg-transparent py-1 outline-none">
                <option value="">feb1 - feb29</option>
                <option value="">jan1 - jan31</option>
                <option value="">dec1 - dec31</option>
              </select>
            </div>
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
          <div className="flex flex-row items-center justify-center w-full py-[6px]">
            <button className="border border-primary-color px-5 py-[3px] text-sm text-primary-color font-semibold bg-transparent backdrop-blur-lg rounded-[4px] shadow-md capitalize flex flex-row items-center">adjust goal <DriveFileRenameOutlineIcon className="text-primary-color text-xs font-normal mx-[2.5px] p-[2px]" /></button>
          </div>
        </div>

        <div className="basis-[60%] bg-white rounded-md shadow-mix1">
     
        </div>
      </div>
    </div>
  );
}
