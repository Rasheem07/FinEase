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

  return (
    <AppContext.Provider value={{ accountDetails, setaccountDetails}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
