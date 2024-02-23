import { Outlet } from "react-router-dom"

export function AuthLayout() {
  return (
    <div className="min-h-screen w-screen grid place-content-center font-jakarta-sans">
      <div className="w-[327px]">
        <Outlet />
      </div>
    </div>
  )
}
