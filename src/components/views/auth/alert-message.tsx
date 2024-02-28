import { cn } from "@/utils/cn"

type AlertMessageProps = {
  msg?: string
  className?: string
}

export function AlertMessage({ msg, className }: AlertMessageProps) {
  return (
    <p
      className={cn(
        "text-error opacity-2 text-xs w-full bg-error/10 p-2 rounded-lg",
        msg ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {msg}&nbsp;
    </p>
  )
}
