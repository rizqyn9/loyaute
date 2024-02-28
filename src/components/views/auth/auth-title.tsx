import type React from "react"
import { AuthLogo } from "./auth-logo"

type AuthTitleProps = {
  title: string
  desc: React.ReactNode
}

export function AuthTitle(props: AuthTitleProps) {
  const { title, desc } = props
  return (
    <>
      <AuthLogo />
      <div className="text-center mt-8">
        <h1 className="text-[29px] font-bold">{title}</h1>
        <p className="text-sm text-neutral-200 mt-2 leading-6">{desc}</p>
      </div>
    </>
  )
}
