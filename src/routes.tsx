import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./pages/auth/login"
import { AuthLayout } from "./pages/auth/_layout"
import { RegisterPage } from "./pages/auth/register"
import { OtpPage } from "./pages/auth/otp"
import { IndexPage } from "./pages/index"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { DesignSystem } from "./pages/design-system"

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
    path: "/design-system",
    element: <DesignSystem />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <IndexPage />
        <Footer />
      </>
    ),
  },
])

export function RouterApps() {
  return <RouterProvider router={router} />
}
