"use client";
import { useRouter } from "next/navigation";
import SideNav from "./components/sideNav";
import Header from "./components/header";
import BalanceCard from "./components/home/balanceCard";
import GoalsCard from "./components/home/goalsCard";
import UpcomingBills from "./components/home/upcomingBills";
import TransactionsCard from "./components/home/transactionsCard";
import StatisticsCard from "./components/home/StatisticsCard";
import ExpensesCard from "./components/home/expensesCard";
import { useContext } from "react";
import { AppContext } from "./contexts/cardContext";


export default async function Home() {
  return (
    <>
      <div className="grid grid-flow-row md:grid-cols-3 md:grid-rows-1 grid-rows-3 flex-row gap-4 mx-6 my-2 max-w-[90vw]">
        <BalanceCard />
        <GoalsCard />
        <UpcomingBills />
      </div>
      <div className="flex md:flex-row flex-col mt-4 mb-8 mx-6">
        <TransactionsCard />
        <div className="md:flex md:flex-col justify-between md:basis-3/4 md:mx-6">
          <StatisticsCard />
          <ExpensesCard />
        </div>
      </div>
    </>
  );
}
