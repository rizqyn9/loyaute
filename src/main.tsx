import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { AppProvider } from "./app"
import "./assets/styles/index.css"
import "unfonts.css"

async function enableMocking() {
  // Currently force enabled
  // if (process.env.NODE_ENV !== "development") {
  //   return
  // }

  const { worker } = await import("./mocks/browser")

  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppProvider />
    </StrictMode>,
  )
})
