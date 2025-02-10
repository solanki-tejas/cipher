import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { borderRadius, boxShadow } from "@/styles/theme";
import SortIcon from "@mui/icons-material/Sort";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import {
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableProps<T> {
  isLoading?: boolean;
  columns: ColumnDef<T, any>[];
  data: T[];
  selection?: boolean;
  pagination?: {
    disabled?: boolean;
    count?: number;
  };
}

export default function DataTable<T>({
  isLoading,
  columns,
  data,
  selection = false,
  pagination,
}: TableProps<T>) {
  const router = useRouter();
  const queryPage = Number(router.query.page) || 1;
  const [page, setPage] = useState(queryPage);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  useEffect(() => {
    setPage(queryPage);
  }, [queryPage]);

  const table = useReactTable({
    columns,
    data,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allRowIds = table.getRowModel().rows.map((row) => row.id);
      setSelectedRows(new Set(allRowIds));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (rowId: string) => {
    setSelectedRows((prev) => {
      const newSelectedRows = new Set(prev);
      if (newSelectedRows.has(rowId)) {
        newSelectedRows.delete(rowId);
      } else {
        newSelectedRows.add(rowId);
      }
      return newSelectedRows;
    });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
    router.push({ query: { ...router.query, page: newPage } }, undefined, {
      shallow: true,
    });
  };

  return (
    <div>
      <div
        className="overflow-x-auto"
        style={{
          boxShadow: boxShadow,
          borderRadius: borderRadius,
        }}
      >
        <Table className="w-full text-sm text-gray-800">
          <TableHead>
            <TableRow>
              {selection && (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={
                      selectedRows.size === table.getRowModel().rows.length
                    }
                    onChange={handleSelectAll}
                    inputProps={{ "aria-label": "select all rows" }}
                    style={{ color: "white" }}
                  />
                </TableCell>
              )}
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    className="p-3 text-left cursor-pointer select-none whitespace-nowrap"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center space-x-1 text-sm text-white">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === "asc" ? (
                        <ArrowUpward
                          sx={{ height: "16px" }}
                          style={{ color: "white" }}
                        />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <ArrowDownward
                          sx={{ height: "16px" }}
                          style={{ color: "white" }}
                        />
                      ) : (
                        <SortIcon
                          sx={{ height: "16px" }}
                          style={{ color: "white" }}
                        />
                      )}
                    </div>
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row, rowIndex) => (
                <TableRow key={row.id} className="hover:bg-gray-100 transition">
                  {selection && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRows.has(row.id)}
                        onChange={() => handleSelectRow(row.id)}
                        inputProps={{ "aria-label": `select row ${row.id}` }}
                      />
                    </TableCell>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-3 whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="p-4 text-center text-gray-500"
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="py-2 flex justify-center border-t-2">
          <Pagination
            {...pagination}
            color="primary"
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
