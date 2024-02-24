import React from "react";

export default function Input({label, placeholder}: {label:string, placeholder: string}) {
  return (
    <div className="flex flex-col w-[80%] md:max-w-[25vw] my-2">
      <label
        htmlFor="bank"
        className="text-sm text-secondary-color font-semibold capitalize"
      >
        {label}
      </label>
      <input
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
        className="text-[16px] leading-[24px] font-medium text-default-black px-4 py-2 bg-transparent border mr-8 my-1 outline-none shadow-sm rounded-[4px] placeholder:text-sm placeholder:font-normal placeholder:text-gray2 w-full"
      />
    </div>
  );
}
