"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])

  interface Error {
    type: string;
    message: string;
  }

  const [error, seterror] = useState<Error>({ type: "", message: "" });
  const [loading, setloading] = useState(false);

  const handleSignup = async (data: FormData) => {
    setloading(true);
    //get user details
    const name = data.get("name")?.valueOf();
    const email = data.get("email")?.valueOf();
    const password = data.get("password")?.valueOf();

    //signing user or creating a new account for a user
    try {
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const json = await response.json();
      console.log(json);

      setloading(false);
      //checking whether response is ok and setting error if not
      if (!response.ok) {
        seterror({ type: json.error.type, message: json.error.message });
      } else {
        seterror({ type: "", message: "" });
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("email", json.newUser.email);
        localStorage.setItem("name", json.newUser.name);
        setloading(true);
        router.push("/");
      }
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-primary-color"></div>
      )}
      <div className="container min-h-screen max-h-screen min-w-[100vw] bg-[#F4F5F7] flex items-center justify-center shadow-inner overflow-x-hidden">
        <div className="flex flex-col p-3 min-w-[350px] max-w-[350px] md:min-w-[400px]">
          <h1 className="leading-[32px] tracking-[8%] text-[36px] text-primary-color mx-auto mb-4">
            FinEase.<strong className="font-bold uppercase">io</strong>
          </h1>
          <h1 className="leading-[32px] tracking-wide text-[24px] font-semibold text-secondary-color mx-auto mb-4">
            create your account
          </h1>
          <form action={handleSignup} className="flex flex-col">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="name"
                className="text-label-color capitalize text-[16px] leading-6"
              >
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-[1.5px] border-solid border-gray-300 px-3 py-1 rounded-md bg-transparent shadow-inner my-1 hover:border-gray-400 focus:border-gray-400 focus:border-[1.7px] outline-none"
              />
              {error && error.type == "name" ? (
                <p className="text-[14px] font-sans text-red tracking-wide px-2">
                  {error.message}
                </p>
              ) : (
                ""
              )}
            </div>
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
              sign up
            </button>
          </form>
          <div className="flex flex-row items-center px-4 max-w-full">
            <span className="h-[1px] min-w-[70px] flex-auto bg-gray-300"></span>
            <p className="text-md text-secondary-color px-4">or sign in with</p>
            <span className="h-[1px] min-w-[70px] flex-auto bg-gray-300"></span>
          </div>
          <button className="flex flex-row items-center justify-center px-auto py-2 my-3 border border-[#E4E7EB] shadow-md rounded-[4px] font-normal text-[16px] bg-[#E4E7EB] text-[#4B5768]">
            <img
              src="Google.png"
              alt="google"
              className="object-contain px-2"
            />
            continue with google
          </button>
          <Link
            href="/login"
            className="text-center text-primary-color text-sm my-2"
          >
            log into existing account
          </Link>
        </div>
      </div>
    </>
  );
}
