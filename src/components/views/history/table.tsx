import { BadgePoint } from "@/components/ui/badge-point"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { HistoryDto } from "@/features/history/history-dto"
import { MoreVertical, Search } from "lucide-react"

export function HistoriesTable() {
  return (
    <div className="border rounded-lg bg-white mt-8 shadow-md">
      <div className="flex justify-between py-4 px-4 flex-wrap gap-y-4">
        <p className="flex flex-col">
          <span className="">Company List Lorem Ipsum</span>
          <span className="text-[#667085] text-sm mt-2">
            These companies consecture ipsum
          </span>
        </p>

        <div className="flex flex-auto items-center h-[44px] justify-end flex-wrap">
          <Select value="all">
            <SelectTrigger className="rounded-none h-full w-[166px] rounded-l-lg focus:ring-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" defaultChecked>
                All
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="relative w-[260px] h-full">
            <Search className="text-[#666E7D80] w-4 h-4 absolute top-3 left-4" />
            <Input
              className="rounded-none rounded-r-lg pl-12 h-full w-[260px] ring-0"
              placeholder="Search"
            />
          </div>
          <button className="bg-[#F9F9FB] min-w-[97px] h-full ml-4 text-sm hover:bg-slate-200 rounded-lg">
            Search
          </button>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader className="bg-[#EAECF0] text-[#667085] font-medium text-sm">
            <TableRow>
              <TableHead className="w-[40%]">Merchant</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-center">Earned Points</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(Array(10).keys()).map(i => (
              <HistoryItem
                key={i}
                merchant="Starbucks"
                date="25 December 2023"
                time="10:24"
                earned={200}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="py-8  border-t">
        <Pagination
          className="min-w-min w-[70%] mx-auto"
          shouldNext={false}
          shouldPrev={false}
          currentPage={1}
          pageTotal={1}
        />
      </div>
    </div>
  )
}

type HistoryItemProps = HistoryDto
function HistoryItem(props: HistoryItemProps) {
  const { merchant, date, time, earned } = props
  return (
    <TableRow className="text-sm font-normal">
      <TableCell className="flex items-center">
        <div className="w-[40px] aspect-[1/1] overflow-hidden rounded-full mr-4">
          <img src="/img/history/5.png" alt="" />
        </div>
        <span className="font-medium">{merchant}</span>
      </TableCell>
      <TableCell className="whitespace-nowrap">{date}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell className="text-right">
        <BadgePoint
          value={earned}
          className="mx-auto block w-min whitespace-nowrap min-w-[70%]"
        />
      </TableCell>
      <TableCell className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Details</DropdownMenuItem>
            <DropdownMenuItem>remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
