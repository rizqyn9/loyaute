import { cn } from "@/utils/cn"
import type React from "react"

type ButtonIconProps = {
  icon: React.ReactNode
} & React.ComponentProps<"button">

export function ButtonIcon({
  icon,
  className,
  children,
  ...rest
}: ButtonIconProps) {
  return (
    <button
      {...rest}
      className={cn(
        "border flex items-center gap-2 font-light border-white rounded-full px-8 py-2",
        className,
      )}
    >
      {icon}
      {children}
    </button>
  )
}
