import { Header } from "@/components/common/header"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
import { Title } from "@/components/ui/typography/title"
import { cn } from "@/utils/cn"
import { MoreHorizontal, Search } from "lucide-react"
import type React from "react"

export function HistroyPage() {
  return (
    <>
      <Header />

      <Container wrapNav className="">
        <div className="mt-12">
          <Title
            title={<h2 className="text-[32px] font-medium">Point History</h2>}
            desc="View your earned and reedemed point"
          />
        </div>

        <div className="border-b border-accent flex w-min gap-5">
          <TabItem selected>Earned</TabItem>
          <TabItem disabled>Reedem</TabItem>
        </div>

        <div className="border rounded-lg bg-white mt-8">
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
                  <TableHead className="text-right">Earned Points</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Starbucks</TableCell>
                  <TableCell>25 December 2023</TableCell>
                  <TableCell>10:24</TableCell>
                  <TableCell className="text-right">+50 Point</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                          View payment details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Container>

      <div className="mb-12" />
    </>
  )
}

function TabItem(
  props: { selected?: boolean } & React.ComponentProps<"button">,
) {
  const { selected, className, ...rest } = props
  return (
    <button
      className={cn(
        [
          "px-12 py-2 disabled:opacity-50 disabled:hover:cursor-not-allowed",
          selected && "border-b-2 border-accent",
        ],
        className,
      )}
      {...rest}
    />
  )
}
