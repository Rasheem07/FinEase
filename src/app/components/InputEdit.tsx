"use client"
import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/cardContext";

export default function InputEdit({ label, placeholder, value, property}: { label: string; placeholder: string; value: string | number , property: string}) {
  const { accountDetails, setaccountDetails } = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setaccountDetails((prev: any) => ({
      ...prev,
      [property]: newValue
    }));
    if (typeof window !== 'undefined') {
      // Access localStorage here
      localStorage.setItem(property, newValue);
    }
    
  };
  
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
        placeholder={placeholder}
        onChange={handleChange}
        className="text-[16px] leading-[24px] font-medium text-secondary-color px-4 py-2 bg-transparent border mr-8 my-1 outline-none shadow-sm rounded-[4px] placeholder:text-sm placeholder:font-normal placeholder:text-gray3"
      />
    </div>
  );
}
