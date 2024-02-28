import { cn } from "@/utils/cn"
import { ArrowPaginationIcon } from "../icon/arrow-pagination"
import { Button } from "./button"
import type React from "react"

type PaginationProps = {
  shouldNext?: boolean
  shouldPrev?: boolean
  currentPage: number
  pageTotal: number
  onNext?: () => void
  onPrev?: () => void
  onPage?: (page: number) => void
  className?: string
}

export function Pagination(props: PaginationProps) {
  const {
    shouldNext,
    shouldPrev,
    pageTotal,
    onNext,
    onPrev,
    onPage,
    className,
    currentPage,
  } = props

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <ButtonArrow action="prev" onClick={onPrev} disabled={!shouldPrev} />
      {Array.from(Array(pageTotal)).map((_, i) => {
        const page = i + 1
        const active = page === currentPage
        return (
          <button
            key={page}
            className={cn([
              "w-10 h-10",
              active && "bg-[#EF7141]/10 text-[#EF7141] rounded-md",
            ])}
            onClick={() => onPage?.(page)}
          >
            {page}
          </button>
        )
      })}
      <ButtonArrow action="next" onClick={onNext} disabled={!shouldNext} />
    </div>
  )
}

function ButtonArrow(
  props: React.ComponentPropsWithoutRef<"button"> & { action: "next" | "prev" },
) {
  const { action, className, ...rest } = props
  return (
    <Button
      className={cn([
        "flex items-center gap-4 border group border-[#D0D5DD] shadow-md",
        action === "next" && "flex-row-reverse",
        className,
      ])}
      {...rest}
    >
      <ArrowPaginationIcon
        className={cn([action === "next" && "rotate-180"])}
      />
      <span className="capitalize">{action}</span>
    </Button>
  )
}
