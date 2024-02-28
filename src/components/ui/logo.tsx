import { cn } from "@/utils/cn"
import { LogoIcon } from "../icon/logo"

type LogoProps = {
  className?: string
  classNameText?: string
  classNameLogo?: string
  invert?: boolean
}

export function Logo({
  className,
  classNameText,
  classNameLogo,
  invert,
}: LogoProps) {
  return (
    <div className={cn("flex items-center font-extrabold gap-2", className)}>
      <LogoIcon
        invert={invert}
        className={cn(["w-[35px] h-[35px]", classNameLogo])}
      />
      <p
        className={cn([
          "text-2xl",
          invert ? "text-white" : "text-black",
          classNameText,
        ])}
      >
        Loyauté
      </p>
    </div>
  )
}
