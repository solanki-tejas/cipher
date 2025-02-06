import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ColumnDef } from "@tanstack/react-table";
import Layout from "@/components/layouts/Layout";
import Table from "@/components/common/Table";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function TablePage() {
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => (await axios.get("/api/users")).data,
  });

  const columns: ColumnDef<User>[] = useMemo(
    () => [
      { accessorKey: "id", header: "ID", width: "100px" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
    ],
    []
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users Table</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <Table columns={columns} data={data || []} />
          <Table columns={columns} data={data || []} selection={true} />
        </div>
      )}
    </div>
  );
}
