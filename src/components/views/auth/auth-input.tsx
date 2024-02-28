import { cn } from "@/utils/cn"
import { forwardRef } from "react"

interface InputAuthProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
  labelClassName?: string
}

const InputAuth = forwardRef<HTMLInputElement, InputAuthProps>((props, ref) => {
  const { label, error, children, className, labelClassName, ...rest } = props
  return (
    <div className={cn("relative pt-5", !!error && "invalid")}>
      <input
        ref={ref}
        {...rest}
        id={rest.name}
        placeholder=" "
        className={cn(
          "h-[56px] peer border flex w-full rounded-lg px-3 outline-none text-sm",
          "border-[#D9D9D9] bg-transparent text-neutral-500",
          "[.invalid_&]:text-error [.invalid_&]:border-error",
          className,
        )}
      />
      <label
        htmlFor={rest.name}
        className={cn(
          "absolute text-sm transition-transform duration-300 top-0",
          "text-[#9A9A9A] scale-75",
          "[.invalid_&]:text-error",
          "peer-placeholder-shown:translate-y-[39px] peer-placeholder-shown:translate-x-3 peer-placeholder-shown:scale-100",
          "peer-focus:translate-y-0 peer-focus:translate-x-0 peer-focus:scale-75",
          labelClassName,
        )}
      >
        {label}
      </label>
      {children}
      {/* Display error message */}
      {/* <span className="text-[10px] ml-2 text-error block">&nbsp;{error}</span> */}
    </div>
  )
})

InputAuth.displayName = "InputAuth"

export { InputAuth }
