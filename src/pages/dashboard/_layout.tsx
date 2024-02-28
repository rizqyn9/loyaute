import { Header } from "@/components/common/header"
import { Footer } from "@/components/footer"
import { Outlet } from "react-router-dom"

export function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
