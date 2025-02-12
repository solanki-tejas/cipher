import { Typography, Tooltip, IconButton } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Table from "@/components/common/Table";
import TableHeader from "@/components/common/TableHeader";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Customer, DrawerMode } from "@/types/customer";
import FormDrawer from "./FormDrawer";

const INITIAL_VALUES: Customer = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const CustomerPage = () => {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const [drawerMode, setDrawerMode] = useState<DrawerMode>("Add");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer>(INITIAL_VALUES);

  const { data, isLoading } = useQuery<{
    data: Customer[];
    pagination: {
      page: number;
      take: number;
      total: number;
      totalPages: number;
    };
  }>({
    queryKey: ["users", queryString],
    queryFn: async () =>
      (await axios.get(`/api/customers?${queryString}`)).data,
    enabled: !!queryString,
  });

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setDrawerMode("Add");
    setSelectedCustomer(INITIAL_VALUES);
  };

  const handleCustomerSubmit = (values: Customer) => {
    console.log("Submitted Data:", values);
    // Add your API call here
  };

  const viewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setDrawerMode("View");
    setDrawerOpen(true);
  };

  const editCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setDrawerMode("Edit");
    setDrawerOpen(true);
  };

  const columns: ColumnDef<Customer>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "address", header: "Address" },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Tooltip title="View">
            <IconButton
              color="primary"
              size="small"
              onClick={() => viewCustomer(row.original)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton
              color="primary"
              size="small"
              onClick={() => editCustomer(row.original)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton color="error" size="small">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-y-6">
      <Typography variant="h3" fontWeight={800}>
        Customer
      </Typography>
      <TableHeader
        onSearch={() => {}}
        onFilterChange={() => {}}
        onAddClick={() => {
          setDrawerMode("Add");
          setSelectedCustomer(INITIAL_VALUES);
          setDrawerOpen(true);
        }}
      />
      <Table
        isLoading={isLoading}
        columns={columns}
        data={data?.data || []}
        selection={true}
        pagination={{
          disabled: !data?.data,
          count: data?.pagination?.totalPages ?? 0,
        }}
      />

      <FormDrawer
        open={drawerOpen}
        mode={drawerMode}
        initialData={selectedCustomer}
        onClose={handleDrawerClose}
        onSubmit={handleCustomerSubmit}
      />
    </div>  
  );
};

export default CustomerPage;
