import { Header } from "@/components/common/header"
import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/typography/title"
import { HistoriesTable } from "@/components/views/history/table"
import { cn } from "@/utils/cn"
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

        <div className="border-b border-accent flex w-min gap-5 mt-8">
          <TabItem selected>Earned</TabItem>
          <TabItem disabled>Reedem</TabItem>
        </div>

        <HistoriesTable />
      </Container>

      <div className="mb-14" />
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
