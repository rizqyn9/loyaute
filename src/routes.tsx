import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./pages/auth/login"
import { AuthLayout } from "./pages/auth/_layout"
import { RegisterPage } from "./pages/auth/register"
import { OtpPage } from "./pages/auth/otp"
import { IndexPage } from "./pages/index"
import { HistroyPage } from "./pages/history"
import { DashboardLayout } from "./pages/dashboard/_layout"

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "otp",
        element: <OtpPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: "/history",
        element: <HistroyPage />,
      },
    ],
  },
])

export function RouterApps() {
  return <RouterProvider router={router} />
}
