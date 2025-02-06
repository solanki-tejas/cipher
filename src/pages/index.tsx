import React, { useMemo } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import { StatCard } from "@/components/cards/StatCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { WeeklyBarChart } from "@/components/charts/WeeklyBarChart";
import { TrafficCard } from "@/components/cards/TrafficCard";
import Layout from "@/components/layouts/Layout";
import Table from "@/components/common/Table";

const lineChartData = [
  { month: "SEP", revenue: 50, profit: 30 },
  { month: "OCT", revenue: 35, profit: 20 },
  { month: "NOV", revenue: 25, profit: 15 },
  { month: "DEC", revenue: 45, profit: 35 },
  { month: "JAN", revenue: 30, profit: 20 },
  { month: "FEB", revenue: 40, profit: 30 },
];

const weeklyData = Array.from({ length: 9 }, (_, i) => ({
  day: i + 17,
  revenue: Math.random() * 100,
  profit: Math.random() * 60,
}));

const tableData = [
  {
    name: "BakerySystem PRO",
    progress: 17.5,
    quantity: 2458,
    date: "12 Jan 2021",
  },
  {
    name: "BakerySystem Free",
    progress: 10.8,
    quantity: 1485,
    date: "21 Feb 2021",
  },
  {
    name: "Weekly Update",
    progress: 21.3,
    quantity: 1024,
    date: "13 Mar 2021",
  },
];

const Dashboard: React.FC = () => {
  const stats = [
    { icon: <BarChartIcon />, title: "Earnings", value: "$340.5" },
    {
      icon: <AccountBalanceWalletIcon />,
      title: "Spend this month",
      value: "$642.39",
    },
    { icon: <ShoppingCartIcon />, title: "Sales", value: "$574.34" },
    { icon: <GridViewIcon />, title: "Your Balance", value: "$1,000" },
    { icon: <AssignmentIcon />, title: "New Tasks", value: "145" },
    { icon: <HomeIcon />, title: "Total Projects", value: "$2433" },
  ];

  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "progress", header: "Progress" },
      { accessorKey: "quantity", header: "Quantity" },
      { accessorKey: "date", header: "Date" },
    ],
    []
  );

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mb-6 overflow-wrap">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <RevenueChart />
        <WeeklyBarChart />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Table columns={columns} data={tableData} selection={true} />
        <TrafficCard visitors={2579} percentage="+2.45%" />
      </div>
    </div>
  );
};

export default Dashboard;
