import { cn } from "@/utils/cn"
import type React from "react"

type Tag = "div" | "section"
type ContainerProps<T extends Tag = Tag> = {
  type?: "content" | "featured"
  as?: T
  wrapNav?: boolean
} & React.ComponentProps<T>

export function Container({
  type = "content",
  as = "div",
  className,
  children,
  wrapNav,
  ...rest
}: ContainerProps) {
  const Tag = as
  return (
    // @ts-ignore
    <Tag
      {...rest}
      className={cn([
        "mx-auto px-[1rem]",
        type === "content" ? "max-w-content" : "max-w-design",
        wrapNav && "pt-28",
        className,
      ])}
    >
      {children}
    </Tag>
  )
}
