import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Dashboard } from "./pages/Dashboard";
import { Sensors } from "./pages/Sensors";
import { Alerts } from "./pages/Alerts";
import { Maintenance } from "./pages/Maintenance";
import { Services } from "./pages/Services";
import { Insurance } from "./pages/Insurance";
import { Settings } from "./pages/Settings";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "sensors", Component: Sensors },
      { path: "alerts", Component: Alerts },
      { path: "maintenance", Component: Maintenance },
      { path: "services", Component: Services },
      { path: "insurance", Component: Insurance },
      { path: "settings", Component: Settings },
      { path: "*", Component: NotFound },
    ],
  },
]);
