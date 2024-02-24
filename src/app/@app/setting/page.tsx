"use client";
import React, { useState } from "react";

export default function Page() {
  const [active, setactive] = useState("account");
  const handleNavigate = (e: string) => {
    setactive(e);
  };
  return (
    <div className="p-5 mx-6 my-4 min-h-[60vh] rounded-md shadow-mix1 bg-white text-secondary-color">
      <div className="flex flex-row items-center">
        <button
          className={`transition-all text-lg font-bold ${
            active === "account"
              ? "text-primary-color  border-b-2 border-primary-color"
              : ""
          } capitalize rounded-sm pb-[2px]`}
          onClick={() => handleNavigate("account")}
        >
          account
        </button>
        <button
          className={`transition-all text-lg text-gray2 font-bold ${
            active === "security"
              ? "text-primary-color  border-b-2 border-primary-color"
              : ""
          } capitalize rounded-sm pb-[2px] mx-8`}
          onClick={() => handleNavigate("security")}
        >
          security
        </button>
      </div>

      {active === "account" ? (
        <>
          <div className="flex flex-col my-6 mx-2 space-y-2">
            <div className="flex flex-row items-center">
              <label
                htmlFor="fullname"
                className="text-md font-semibold min-w-[120px] text-default-black capitalize"
              >
                full name
              </label>
              <span
                id="fullname"
                className="text-md font-medium text-gray1 capitalize"
              >
                {typeof window !== "undefined"
                  ? localStorage.getItem("name")
                  : "loading..."}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <label
                htmlFor="email"
                className="text-md font-semibold min-w-[120px] text-default-black capitalize"
              >
                email ID
              </label>
              <span
                id="email"
                className=" text-md font-medium text-gray1 capitalize"
              >
                {typeof window !== "undefined"
                  ? localStorage.getItem("email")
                  : "loading..."}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <label
                htmlFor="creatat"
                className="text-md font-semibold min-w-[120px] text-default-black capitalize"
              >
                created at
              </label>
              <span
                id="creatat"
                className="text-md font-medium text-gray1 capitalize"
              >
                {typeof window !== "undefined"
                  ? localStorage.getItem("name")
                  : "loading..."}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <label
                htmlFor="using"
                className="text-md font-semibold min-w-[120px] text-default-black capitalize"
              >
                using from
              </label>
              <span
                id="using"
                className="text-md font-medium text-gray1 capitalize"
              >
                {typeof window !== "undefined"
                  ? localStorage.getItem("name")
                  : "loading..."}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <label
                htmlFor="plan"
                className="text-md font-semibold min-w-[120px] text-default-black capitalize"
              >
                plan
              </label>
              <span
                id="plan"
                className="text-md font-medium text-gray1 capitalize"
              >
                {typeof window !== "undefined"
                  ? localStorage.getItem("name")
                  : "loading..."}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center my-2 gap-x-4">
            <button className="text-[16px] leading-6 font-semibold rounded-[4px] shadow-md bg-transparent border border-red text-red px-4 py-1 uppercase focus:ring-2 ring-red transition-all">
              delete
            </button>
            <button className="text-[16px] leading-6 font-semibold rounded-[4px] shadow-md bg-primary-color text-white uppercase px-4 py-1 focus:ring-2 transition-all">
              update profile
            </button>
          </div>
          <div className="flex flex-row items-center space-x-1 mx-2 pt-6">
            <input
              type="checkbox"
              name="notification"
              id="notification"
              className="checked:text-primary-color"
            />
            <label htmlFor="notification" className="text-default-black">
              turn on your notifications, we will notify our latest updates
              through your email ID
            </label>
          </div>
        </>
      ) : (
        <form className="flex flex-col my-6 mx-2 space-y-3">
            <div className="flex flex-col max-w-[20vw]">
            <label
                htmlFor="password"
                className="text-md font-bold text-default-black capitalize"
              >
                old password
              </label>
              <input type="password" name="password" id="password" className="text-md font-medium text-gray2 border-0 border-b border-primary-color border-solid py-1 px-3 mx-1 outline-none" required/>
            </div>
            <div className="flex flex-col max-w-[20vw]">
            <label
                htmlFor="newpassword"
                className="text-md font-bold text-default-black capitalize"
              >
                new password
              </label>
              <input type="password" name="password" id="newpassword" className="text-md font-medium text-gray2 border-0 border-b border-primary-color border-solid py-1 px-3 mx-1 outline-none" required/>
            </div>
            <div className="flex flex-col max-w-[20vw]">
            <label
                htmlFor="re-newpassword"
                className="text-md font-bold text-default-black capitalize"
              >
                retype new password
              </label>
              <input type="password" name="password" id="re-newpassword" className="text-md font-medium text-gray2 border-0 border-b border-primary-color border-solid py-1 px-3 mx-1 outline-none"  required/>
            </div>
            <div className=" max-w-[20vw] pt-4">
            <button type="submit" className="text-[16px] leading-6 font-semibold rounded-[4px] shadow-md bg-primary-color  text-white uppercase px-4 py-1 focus:ring-2 transition-all">
              update password
            </button>
            </div>
        </form>
      )}
    </div>
  );
}
