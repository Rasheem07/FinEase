"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginPage() {

  const router = useRouter();

useEffect(() => {
  if (typeof window !== 'undefined') {
    // Access localStorage here 
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }
}, [])

  const [error, setError] = useState<Error>({ type: "", message: "" });
  const handleLogin = async (data: FormData) => {
    const email = data.get("email")?.valueOf() as string;
    const password = data.get("password")?.valueOf() as string;
  
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      setError({ type: json.error.type, message: json.error.message });
    } else {
      setError({ type: "", message: "" });
      if (typeof window !== 'undefined') {
        // Access localStorage here      
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("email", json.user.email);
        localStorage.setItem("name", json.user.name);
      }
      router.push('/');
    }
  };
  

  interface Error {
    type: string;
    message: string;
  }
  return (
    <div className="container min-h-[100vh] m-0 p-0 min-w-[100vw] bg-[#F4F5F7] flex items-center justify-center shadow-inner overflow-x-hidden">
      <div className="flex flex-col min-w-[350px] max-w-[350px] md:min-w-[400px] m-0">
        <h1 className="leading-[32px] tracking-[8%] text-[36px] text-primary-color mx-auto mb-10">
          FinEase.<strong className="font-bold uppercase">io</strong>
        </h1>
        <form action={handleLogin} className="flex flex-col">
          <div className="flex flex-col mb-2">
            <label
              htmlFor="email"
              className="text-label-color capitalize text-[16px] leading-6"
            >
              email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-[1.5px] border-solid border-gray-300 px-3 py-1 rounded-md bg-transparent shadow-inner my-1 hover:border-gray-400 focus:border-gray-400 focus:border-[1.7px] outline-none"
            />
            {error && error.type == "email" ? (
              <p className="text-[14px] font-sans text-red tracking-wide px-2">
                {error.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="password"
              className="text-label-color capitalize text-[16px] leading-6"
            >
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-[1.5px] border-solid border-gray-300 px-3 py-1 rounded-md bg-transparent shadow-inner my-1 hover:border-gray-400 focus:border-gray-400 focus:border-[1.7px] outline-none"
            />
            {error && error.type == "password" ? (
              <p className="text-[14px] font-sans text-red tracking-wide px-2">
                {error.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-row items-center my-2">
            <input
              type="checkbox"
              name="keepSigned"
              id="checkbox"
              className="mx-3 text-primary-color h-4 w-4"
            />
            keep me signed in
          </div>
          <button
            type="submit"
            className="py-2 px-auto rounded-[4px] shadow-md bg-primary-color font-bold capitalize text-white my-4"
          >
            login
          </button>
        </form>
        <div className="flex flex-row items-center px-4 my-4 max-w-full">
          <span className="h-[1px] min-w-[70px] flex-auto bg-gray-300"></span>
          <p className="text-md text-secondary-color px-4">or sign in with</p>
          <span className="h-[1px] min-w-[70px] flex-auto bg-gray-300"></span>
        </div>
        <button onClick={() => router.push('/api/auth/Oauth2/google')} className="flex flex-row items-center justify-center px-auto py-2 my-2 border border-[#E4E7EB] shadow-md rounded-[4px] font-normal text-[16px] bg-[#E4E7EB] text-[#4B5768]">
          <img src="Google.png" alt="google" className="object-contain px-2" />
          continue with google
        </button>
        <Link
          href="/signup"
          className="text-center text-primary-color text-sm my-2"
        >
          create an account
        </Link>
      </div>
    </div>
  );
}
