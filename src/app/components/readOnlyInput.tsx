import React from "react";

export default function ReadOnlyInput({label, placeholder, value}: {label:string, placeholder: string, value: any}) {
  return (
    <div className="flex flex-col max-w-[25vw] my-2">
    <label
      htmlFor={label}
      className="text-sm text-secondary-color font-semibold capitalize"
    >
      {label}
    </label>
    <input
      type="text"
      name={label}
      id={label}
      value={value}
      readOnly
      className="text-[16px] leading-[24px] font-medium text-secondary-color px-4 py-2 bg-transparent mr-8 my-1 outline-none rounded-[4px] placeholder:text-sm placeholder:font-normal placeholder:text-gray3"
    />
  </div>
  );
}
