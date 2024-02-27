import { cn } from "@/utils/cn"
import { Input } from "./input-v2"
import React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
  label: string
}

const InputFloating = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, placeholder, ...rest } = props
    return (
      <div className="relative z-0 h-14">
        <Input {...rest} ref={ref} placeholder={placeholder ?? ""} />
        <label
          htmlFor="floating_standard"
          className={cn([
            "absolute text-sm text-stroke duration-300 transform top-5 -z-10 origin-center font-jakarta-sans",
            "peer-focus:scale-95 scale-95 peer-focus:-translate-y-12 -translate-y-12 peer-focus:left-0 left-0",
            "peer-focus:text-primary",
            "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3",
          ])}
        >
          {label}
        </label>
      </div>
    )
  },
)

export { InputFloating }
