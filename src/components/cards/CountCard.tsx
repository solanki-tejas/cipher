// components/CountCard.tsx
import React from "react";
import { SvgIcon } from "@mui/material";

interface CountCardProps {
  title: string;
  count: number;
  icon: React.ReactElement; // MUI icon component as a prop
}

const CountCard: React.FC<CountCardProps> = ({ title, count, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
