"use client"
import React, { useContext } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Image from "next/image";
import { AppContext } from "../contexts/cardContext";

export default function Header() {
  const date = new Date();

  let name;
  const {isNav, setisNav} = useContext(AppContext);
  
  if(typeof window !== 'undefined'){
    name = localStorage.getItem('name') as string;
  }
  
  return (
    <div className="flex flex-row w-full max-w-[100vw] min-h-[60px] md:min-h-[70px] bg-transparent justify-between items-center border-b border-gray5">
      <div className="hidden md:flex flex-row justify-between items-center">
        <h1 className="px-6 text-[24px] leading-[28px] font-bold tracking-wider text-default-black capitalize">
          {name}
        </h1>
        <p className="text-gray3 normal text-[14px] leading-[20px] pt-1 flex flex-row items-center">
          <KeyboardDoubleArrowLeftIcon />
          {date.toDateString()}
        </p>
      </div>
      <div className="flex flex-col mx-2 md:hidden" onClick={() => isNav? setisNav(false): setisNav(true)}>
         <span className="h-1 w-6 my-[2px] bg-secondary-color peer rounded-sm"></span>
         <span className="h-1 w-6 my-[2px] bg-secondary-color rounded-sm"></span>
         <span className="h-1 w-6 my-[2px] bg-secondary-color rounded-sm"></span>
      </div>
      <div className="flex flex-row justify-between items-center mx-2 md:mx-6">
        <NotificationsIcon className="h-[25px] w-[25px] object-contain text-gray1 mx-2 md:mx-5 hover:shadow-inner" />
        <div
          className="flex flex-row items-center justify-between relative min-w-[225px] sm:min-w-[250px] md:min-w-[275px] lg:min-w-[300px] bg-white rounded-md max-h-[48px] py-2 md:py-2 px-5 mr-2"
          style={{ boxShadow: "rgba(106, 22, 58, 0.04) 0 26px 26px 0" }}
        >
          <input
            type="text"
            name="search"
            id="search"
            className="text-secondary-color outline-none placeholder:text-gray3 basis-[85%]"
            placeholder="search here"
            aria-selected="false"
          />
            <img src="/search.png" alt="search"/>
        </div>
      </div>
    </div>
  );
}
