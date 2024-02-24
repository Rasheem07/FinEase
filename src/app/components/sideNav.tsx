"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";
import Image from "next/image";
import { AppContext } from "../contexts/cardContext";

export default function SideNav() {
  const router = useRouter();
  const location = usePathname();

  const activeStyles = "bg-primary-color text-white";
  const iconStyles = "mx-1 p-1";

  const name = localStorage.getItem('name') as string;
  
  const handleLogout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
    router.push('/login');
  }

  const {isNav, setisNav} = useContext(AppContext);

  if(isNav){
    document.body.style.overflowY= "hidden"
  }else{
    document.body.style.overflowY= "scroll"
  }

  return (
    <div className={`md:flex ${isNav? 'flex' : 'hidden'} flex-col bg-default-black min-h-[100vh] shadow-inner px-3 py-8 min-w-[70vw] max-w-[70vw] md:min-w-[17vw] md:max-w-[18vw] z-20 absolute md:relative`}>
      <button onClick={() => setisNav(false)} className="md:hidden text-white bg-blue-400 py-1 px-3">close</button>
      <h1 className="text-white text-xl font-semibold tracking-wide mx-auto">
        FinEase.IO
      </h1>
      <div className="flex flex-col justify-between flex-auto my-4">
        <ul className="flex flex-col mx-4">
          <Link href='/' className={`flex flex-row items-center text-md my-[2px] capitalize py-2 px-3 font-sans hover:font-semibold  ${location === '/'? activeStyles : 'text-gray4 hover:bg-secondary-color'} rounded-sm shadow-inner `}>
            <GridViewIcon className={iconStyles}/>
            overview
          </Link>
          <Link href='/balances' className={`flex flex-row items-center text-md my-[2px] text-gray4 capitalize py-2 px-3 font-sans hover:font-semibold hover:text-white rounded-sm shadow-inner  ${location === '/balances'? activeStyles : 'text-gray4 hover:bg-secondary-color'}`}>
            <AccountBalanceWalletIcon className={iconStyles} />
            balances
          </Link>
          <Link href='/transactions' className={`flex flex-row items-center text-md my-[2px] text-gray4 capitalize py-2 px-3 font-sans hover:font-semibold hover:text-white rounded-sm shadow-inner ${location === '/transactions'? activeStyles : 'text-gray4 hover:bg-secondary-color'}`}>
            <CompareArrowsIcon className={iconStyles} />
            transactions
          </Link>
          <Link href='/bills' className={`flex flex-row items-center text-md my-[2px] text-gray4 capitalize py-2 px-3 font-sans hover:font-semibold hover:text-white rounded-sm shadow-inner ${location === '/bills'? activeStyles : 'text-gray4 hover:bg-secondary-color'}`}>
            <PaymentsIcon className={iconStyles} />
            bills
          </Link>
          <Link href='/expenses' className={`flex flex-row items-center text-md my-[2px] text-gray4 capitalize py-2 px-3 font-sans hover:font-semibold hover:text-white rounded-sm shadow-inner ${location === '/expenses'? activeStyles : 'text-gray4 hover:bg-secondary-color'}`}>
            <LocalAtmIcon className={iconStyles} />
            expenses
          </Link>
          <Link href='/goals' className={`flex flex-row items-center text-md my-[2px] text-gray4 capitalize py-2 px-3 font-sans hover:font-semibold hover:text-white rounded-sm shadow-inner ${location === '/goals'? activeStyles : 'text-gray4 hover:bg-secondary-color'}`}>
            <FlagIcon className={iconStyles} />
            goals
          </Link>
          <Link href='/setting' className={`flex flex-row items-center text-md my-[2px] text-gray4 capitalize py-2 px-3 font-sans hover:font-semibold hover:text-white rounded-sm shadow-inner ${location === '/setting'? activeStyles : 'text-gray4 hover:bg-secondary-color'}`}>
            <SettingsIcon className={iconStyles} />
            setting
          </Link>
        </ul>
        <div className="flex flex-col mx-4 justify-between min-h-max">
           <button className="flex flex-row items-center justify-start px-6 text-md my-[2px] mx-1 py-[6px] bg-gray1 rounded-sm shadow-md text-gray6 capitalize hover:bg-secondary-color mb-8" onClick={handleLogout}>
            <LogoutIcon className={iconStyles} />
            logout
            </button>
           <span className="h-[1.5px] bg-secondary-color w-full px-3 my-2"/>
           <div className="flex flex-row items-center my-3 justify-between flex-auto w-full min-w-full">
             <img src="/logo.jpg" alt="user" className="h-[30px] w-[30px] object-contain shadow-sm rounded-full" />
             <div className="flex flex-col flex-auto justify-between mx-3">
                <h3 className="text-[14px] leading-4 text-gray4 tracking-wide capitalize font-medium block cursor-pointer">{name}</h3>
                <span className="cursor-pointer text-[12px] text-gray3 font-sans">edit profile</span>
             </div>
             <button className="text-lg font-bold tracking-wider text-gray4 mx-1">
              <MoreVertIcon />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
