import React from "react";
import { Card, CardContent } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { primaryColor, secondaryColor } from "@/styles/theme";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export const WeeklyBarChart: React.FC = (data: any) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    colors: [primaryColor, secondaryColor],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
      labels: {
        style: {
          colors: "#64748b",
        },
      },
    },
    yaxis: {
      // show: false,
    },
    grid: {
      borderColor: "#f1f5f9",
    },
    tooltip: {
      theme: "light" as const,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45],
    },
    {
      name: "Profit",
      data: [13, 23, 20, 8, 13, 27, 33, 12, 19],
    },
  ];

  return (
    <Card>
      <CardContent className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">Weekly Revenue</div>
          <BarChartIcon />
        </div>
        <div style={{ height: "300px" }} className="flex-1">
          <ApexCharts
            options={chartOptions}
            series={series}
            type="bar"
            height="100%"
          />
        </div>
      </CardContent>
    </Card>
  );
};
