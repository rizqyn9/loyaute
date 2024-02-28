import { cn } from "@/utils/cn"
import type React from "react"

type AuthButtonProps = React.ComponentProps<"button">

export function AuthButton(props: AuthButtonProps) {
  const { className, ...rest } = props
  return (
    <button
      className={cn([
        "text-white rounded-lg bg-primary h-14",
        "disabled:bg-[#D9D9D9] disabled:hover:cursor-not-allowed",
      ])}
      {...rest}
    />
  )
}
