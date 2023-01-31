import { createContext } from "react"
import { DashboardStore } from "./DashboardStore"

export const RootStoreContext = createContext({
  dashboardStore: new DashboardStore("New Dashboard")
})