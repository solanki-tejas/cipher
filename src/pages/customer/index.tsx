import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import Table from "@/components/common/Table";
import TableHeader from "@/components/common/TableHeader";

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

const Customer = () => {
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
    <div className="flex flex-col gap-y-6">
      <Typography variant="h4" fontWeight={800}>
        Customer
      </Typography>
      {/* <TableHeader
        onSearch={() => {}}
        onAddClick={() => {}}
        onFilterChange={() => {}}
      /> */}
      <Table columns={columns} data={tableData} selection={true} />
    </div>
  );
};

export default Customer;
