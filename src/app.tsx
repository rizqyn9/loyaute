import { Provider } from "react-redux"
import { store } from "./app/store"
import { RouterApps } from "./routes"
import { Toaster } from "./components/ui/sonner"

export function AppProvider() {
  return (
    <Provider store={store}>
      <Toaster position="top-center" />
      <RouterApps />
    </Provider>
  )
}
