import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { borderRadius, boxShadow, secondaryColor } from "@/styles/theme";
import SortIcon from "@mui/icons-material/Sort";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

interface TableProps<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
  selection?: boolean; // Add the selection prop
}

export default function DataTable<T>({
  columns,
  data,
  selection = false,
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set()); // Track selected rows

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

  return (
    <div
      className="overflow-x-auto"
      style={{
        boxShadow: boxShadow,
        borderRadius: borderRadius,
      }}
    >
      <Table
        className="w-full text-sm text-gray-800"
        aria-labelledby="tableTitle"
      >
        {/* Header */}
        <TableHead style={{ backgroundColor: secondaryColor }}>
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
              headerGroup.headers.map((header, index) => (
                <TableCell
                  key={header.id}
                  className="p-3 text-left cursor-pointer select-none whitespace-nowrap "
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
                    {/* </TableSortLabel> */}
                  </div>
                </TableCell>
              ))
            )}
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                className={`hover:bg-gray-100 transition ${
                  rowIndex === table.getRowModel().rows.length - 1
                    ? "rounded-bl-lg rounded-br-lg"
                    : ""
                }`}
              >
                {selection && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.has(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                      inputProps={{ "aria-label": `select row ${row.id}` }}
                    />
                  </TableCell>
                )}
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <TableCell
                    key={cell.id}
                    className={`p-3 whitespace-nowrap ${
                      rowIndex === table.getRowModel().rows.length - 1
                        ? cellIndex === 0
                          ? "rounded-bl-lg"
                          : cellIndex === row.getVisibleCells().length - 1
                          ? "rounded-br-lg"
                          : ""
                        : ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
    </div>
  );
}
