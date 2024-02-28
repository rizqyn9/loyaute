import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
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
