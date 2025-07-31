"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { CheckCircle2, XCircle, Clock, Circle, BadgeCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Approved, Pending, Rejected } from "@/components/ui/Approval"

const attendanceData = [
  {
    id: "emp001",
    name: "John Doe",
    date: "2023-06-01",
    status: "Present",
    salaryDeducted: 0,
  },
  {
    id: "emp002",
    name: "Jane Smith",
    date: "2023-06-01",
    status: "Absent",
    salaryDeducted: 500,
  },
  {
    id: "emp003",
    name: "Robert Johnson",
    date: "2023-06-01",
    status: "Present",
    salaryDeducted: 0,
  },
  {
    id: "emp004",
    name: "Emily Davis",
    date: "2023-06-01",
    status: "Half Day",
    salaryDeducted: 250,
  },
  {
    id: "emp005",
    name: "Michael Wilson",
    date: "2023-06-01",
    status: "Leave",
    salaryDeducted: 0,
  },
]

export const attendanceColumns = [
  {
    accessorKey: "id",
    header: "Employee ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <div className="flex items-center gap-2">
          {status === "Present" && (
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          )}
          {status === "Absent" && (
            <XCircle className="h-4 w-4 text-red-500" />
          )}
          {status === "Half Day" && (
            <Clock className="h-4 w-4 text-yellow-500" />
          )}
          {status === "Leave" && (
            <Circle className="h-4 w-4 text-blue-500" />
          )}
          <span>{status}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "salaryDeducted",
    header: () => <div className="text-right">Salary Deducted</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("salaryDeducted"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return (
        <div className="text-right font-medium">
          {amount > 0 ? formatted : "-"}
        </div>
      )
    },
  },
]

export function EmployeeAttendanceTable() {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])

  const table = useReactTable({
    data: attendanceData,
    columns: attendanceColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter names..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table className="bg-zinc-300 dark:bg-neutral-900">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  colSpan={attendanceColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

const leaveData = [
  {
    id: "lv001",
    type: "Annual",
    startDate: "2023-05-01",
    endDate: "2023-05-05",
    days: 5,
    status: "Approved",
    notes: "Family vacation",
  },
  {
    id: "lv002",
    type: "Sick",
    startDate: "2023-06-10",
    endDate: "2023-06-11",
    days: 2,
    status: "Approved",
    notes: "Flu",
  },
  {
    id: "lv003",
    type: "Emergency",
    startDate: "2023-07-15",
    endDate: "2023-07-15",
    days: 1,
    status: "Pending",
    notes: "Family emergency",
  },
  {
    id: "lv004",
    type: "Maternity",
    startDate: "2023-08-01",
    endDate: "2023-11-01",
    days: 93,
    status: "Approved",
    notes: "Maternity leave",
  },
  {
    id: "lv005",
    type: "Unpaid",
    startDate: "2023-09-01",
    endDate: "2023-09-07",
    days: 7,
    status: "Rejected",
    notes: "Personal reasons",
  },
]

export const leaveColumns = [
  {
    accessorKey: "type",
    header: "Leave Type",
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => <div>{row.getValue("startDate")}</div>,
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => <div>{row.getValue("endDate")}</div>,
  },
  {
    accessorKey: "days",
    header: "Days",
    cell: ({ row }) => <div>{row.getValue("days")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <div className="flex items-center gap-2 ">
          {status === "Approved" && (
            <Approved label="Approved" />
          )}
          {status === "Rejected" && (
          <Rejected label="Rejected" />

          )}
          {status === "Pending" && (
            <Pending label="Pending" />
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => <div className="text-sm">{row.getValue("notes")}</div>,
  },
]

// Generic table component for leave data with filter
function LeaveTable({ data, filterPlaceholder = "Filter leave type..." }) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])

  const table = useReactTable({
    data,
    columns: leaveColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder={filterPlaceholder}
          value={table.getColumn("type")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("type")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table className="bg-white dark:bg-neutral-900">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  colSpan={leaveColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Main table for all leave data
export function EmployeeLeaveTable() {
  return <LeaveTable data={leaveData} filterPlaceholder="Filter leave type..." />
}

// Table for Approved (Success) leaves
export function EmployeeLeaveSuccessTable() {
  const successData = React.useMemo(
    () => leaveData.filter((item) => item.status === "Approved"),
    []
  )
  return <LeaveTable data={successData} filterPlaceholder="Filter approved leave type..." />
}

// Table for Pending leaves
export function EmployeeLeavePendingTable() {
  const pendingData = React.useMemo(
    () => leaveData.filter((item) => item.status === "Pending"),
    []
  )
  return <LeaveTable data={pendingData} filterPlaceholder="Filter pending leave type..." />
}

// Table for Rejected leaves
export function EmployeeLeaveRejectedTable() {
  const rejectedData = React.useMemo(
    () => leaveData.filter((item) => item.status === "Rejected"),
    []
  )
  return <LeaveTable data={rejectedData} filterPlaceholder="Filter rejected leave type..." />
}