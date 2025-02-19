
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TargetView from "./pages/TargetView";
import AttendanceView from "./pages/AttendanceView";
import ReportsView from "./pages/ReportsView";
import FormOrderView from "./pages/FormOrderView";
import ExpenseView from "./pages/ExpenseView";
import ClientSitesView from "./pages/ClientSitesView";
import LeavesView from "./pages/LeavesView";
import TasksView from "./pages/TasksView";
import OrderView from "./pages/OrderView";
import OrganizationView from "./pages/OrganizationView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/attendance",
    element: <AttendanceView />,
  },
  {
    path: "/reports",
    element: <ReportsView />,
  },
  {
    path: "/tasks",
    element: <TasksView />,
  },
  {
    path: "/organization",
    element: <OrganizationView />,
  },
  {
    path: "/leaves",
    element: <LeavesView />,
  },
  {
    path: "/order",
    element: <OrderView />,
  },
  {
    path: "/targets",
    element: <TargetView />,
  },
  {
    path: "/form",
    element: < FormOrderView/>,
  },
  {
    path: "/expenses",
    element: < ExpenseView/>,
  },
  {
    path: "/clients",
    element: < ClientSitesView/>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
