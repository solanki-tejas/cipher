import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import Table from "@/components/common/Table";
import TableHeader from "@/components/common/TableHeader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ColumnDef } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation"; // Importing useSearchParams

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerPage = () => {
  const searchParams = useSearchParams(); // Get query params
  const queryString = searchParams.toString(); // Convert to string

  const { data, isLoading } = useQuery<Customer[]>({
    queryKey: ["users", queryString], // Include query string in key for caching
    queryFn: async () =>
      (await axios.get(`/api/customers?${queryString}`)).data,
    enabled: !!queryString,
  });

  const columns: ColumnDef<Customer>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Phone" },
      { accessorKey: "address", header: "Address" },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-y-6">
      <Typography variant="h3" fontWeight={800}>
        Customer
      </Typography>
      <TableHeader
        onSearch={() => {}}
        onAddClick={() => {}}
        onFilterChange={() => {}}
      />
      <Table
        isLoading={isLoading}
        columns={columns}
        data={data || []}
        selection={true}
      />
    </div>
  );
};

export default CustomerPage;
