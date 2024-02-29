import type React from "react"
import { IconBell } from "../icon/bell"
import { IconCalendar } from "../icon/calendar"
import { IconHome } from "../icon/home"
import { IconMessage } from "../icon/message"
import { IconProfile } from "../icon/profile"
import { Logo } from "../ui/logo"
import { cn } from "@/utils/cn"
import { Container } from "../ui/container"
import { Link, useLocation } from "react-router-dom"
import { useAppSelector } from "@/app/hooks"
import { Button } from "../ui/button"

export function Header() {
  const invert = useLocation().pathname === "/"
  return (
    <header
      className={cn(
        "absolute top-0 inset-x-0 h-28 z-40 transition-colors duration-500",
        invert ? "text-white bg-transparent" : "text-black shadow-md bg-white",
      )}
    >
      <Container className={cn("grid grid-cols-8 h-full")}>
        <Link className="block my-auto col-span-2" to={"/"}>
          <Logo
            classNameText={cn(
              "font-extrabold",
              invert ? "text-white" : "text-black",
            )}
          />
        </Link>
        <nav
          className={cn(
            "flex items-center gap-12 fill-white col-span-4 place-self-center",
            invert ? "fill-white" : "fill-black",
          )}
        >
          <NavButton to="/" icon={<IconHome />} label="Home" />
          <NavButton to="/history" icon={<IconCalendar />} label="History" />
          <NavButton to="#" icon={<IconMessage />} label="Inbox" />
          <NavButton to="#" icon={<IconProfile />} label="Profile" />
        </nav>

        <HeaderProfile className="col-span-2" />
      </Container>
    </header>
  )
}

function NavButton(props: {
  icon: React.ReactNode
  label: string
  to: string
}) {
  const { icon, label, to } = props
  const isActive = useLocation().pathname === to

  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center gap-2 transition-colors duration-300",
        isActive ? "text-accent" : "hover:text-accent/80 text-inherit",
      )}
    >
      {icon}
      <p className="text-xs">{label}</p>
    </Link>
  )
}

function HeaderProfile(props: { className?: string }) {
  const { isAuthenticated, userData } = useAppSelector(state => state.auth)

  return (
    <div className={cn("flex gap-2 items-center justify-end", props.className)}>
      {isAuthenticated && !!userData ? (
        <>
          <button className="hover:text-black/50">
            <IconBell />
          </button>
          <div className="text-right ml-3">
            <p className="text-xs font-thin">Good morning,</p>
            <p className="font-semibold text-xl whitespace-nowrap line-clamp-1">
              {userData.username}
            </p>
          </div>
          <div className="relative w-[3rem] flex-shrink aspect-[1/1] overflow-hidden rounded-lg">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1708443683295-5b9b4a125687?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </>
      ) : (
        <Link to="/auth/login">
          <Button className="bg-primary text-white">Login</Button>
        </Link>
      )}
    </div>
  )
}
