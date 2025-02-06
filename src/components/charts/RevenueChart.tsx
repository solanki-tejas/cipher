import React from "react";
import { Card, CardContent } from "@mui/material";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { borderRadius } from "@/styles/theme";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export const RevenueChart: React.FC = (data: any) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    colors: ["#795548", "#BCAAA4"],
    stroke: {
      curve: "smooth" as const,
      width: 2,
    },
    xaxis: {
      categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      labels: {
        style: {
          colors: "#64748b",
        },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: "#f1f5f9",
    },
    tooltip: {
      theme: "light",
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [50, 35, 25, 45, 30, 40],
    },
    {
      name: "Profit",
      data: [30, 20, 15, 35, 20, 30],
    },
  ];

  return (
    <Card
      sx={{
        bgcolor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <CardContent className="h-full flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            This month
          </div>
        </div>
        <div className="mb-2">
          <div className="text-2xl font-bold">$37.5K</div>
          <div className="text-green-500 text-sm">+2.45%</div>
        </div>
        <div style={{ height: "300px" }}>
          <ApexCharts
            options={chartOptions}
            series={series}
            type="line"
            height="100%"
          />
        </div>
      </CardContent>
    </Card>
  );
};
