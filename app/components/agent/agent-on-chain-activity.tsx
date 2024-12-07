'use client'

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { DataTable } from "../data-table"

export function AgentOnChainActivity() {
    return <div className="flex flex-col gap-y-6">
            <h2 className="text-xl text-primary font-bold underline">Agent Onchain Activity</h2>
            <DataTable data={[]} columns={columns} />
    </div>
}


export type Transaction = {
  type: "receive" | "send"
  details: string
  amount: string
  time: string
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string
      return (
        <div className={`flex items-center gap-2 font-mono ${type === "receive" ? "text-green-500" : "text-red-500"}`}>
          {type === "receive" ? (
            <ArrowDownRight className="h-4 w-4" />
          ) : (
            <ArrowUpRight className="h-4 w-4" />
          )}
          {type}
        </div>
      )
    },
  },
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => {
      const details = row.getValue("details") as string
      return <div className="font-mono">{details}</div>
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as string
      return <div className="font-mono">{amount}</div>
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      const time = row.getValue("time") as string
      return <div className="font-mono">{time}</div>
    },
  },
]

export default columns


