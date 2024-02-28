import { cn } from "@/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

export const inputVariants = cva(
  cn([
    "block peer appearance-none rounded-lg",
    "h-14 px-3 w-full",
    "border-2 border-stroke placeholder:text-disable",
    "focus:outline-none focus:border-primary",
    "text-sm bg-transparent caret-black",
  ]),
  {
    variants: {
      state: {
        error: "text-error border-error placeholder:text-error/70",
        disable: "",
        iddle: "",
      },
    },
    defaultVariants: {
      state: "iddle",
    },
  },
)

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, isError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          cn(
            inputVariants({
              state: isError ? "error" : "iddle",
            }),
          ),
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  },
)

Input.displayName = "Input"

export { Input }
