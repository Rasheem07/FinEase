"use client"
import React, { createContext, useState } from "react";

const AppContext = createContext<any>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

  interface AccountDetails{
    bank: string;
    type: string;
    amount: number;
    branch: string;
    accountNo: number
  }

  const [accountDetails, setaccountDetails] = useState<AccountDetails>({bank: "", type: "",amount: 0, branch: "", accountNo: 0});
  const [isNav, setisNav] = useState<boolean>(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <AppContext.Provider value={{ accountDetails, setaccountDetails, isNav, setisNav,isModal, setIsModal}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
