import type React from "react"

type TitleProps = {
  title: React.ReactNode
  desc?: React.ReactNode
}

export function Title(props: TitleProps) {
  const { title, desc } = props
  return (
    <>
      {typeof title === "string" ? (
        <h2 className="text-[32px] font-bold">{title}</h2>
      ) : (
        title
      )}
      {desc && (
        <p className="text-[#959595] font-light mt-1 text-base">{desc}</p>
      )}
    </>
  )
}
