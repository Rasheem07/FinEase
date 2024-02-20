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

export default async function Home() {
  return (
    <div>
      <div className="flex flex-row gap-4 mx-6 my-2">
        <BalanceCard />
        <GoalsCard />
        <UpcomingBills />
      </div>
      <div className="flex flex-row mt-4 mb-8 mx-6">
        <TransactionsCard />
        <div className="flex flex-col justify-between basis-3/4 mx-6">
          <StatisticsCard />
          <ExpensesCard />
        </div>
      </div>
    </div>
  );
}
