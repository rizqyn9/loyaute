import { cn } from "@/utils/cn"

export function BadgePoint({
  value,
  className,
}: {
  value: number
  className?: string
}) {
  return (
    <span
      className={cn(
        "bg-[#39B963]/20 px-2 py-2 rounded-full text-[#39B963] text-center",
        className,
      )}
    >
      +{value} Point
    </span>
  )
}
