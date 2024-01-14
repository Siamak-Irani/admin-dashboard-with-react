import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import BigCalendar from "./pages/BigCalendar";
import LineChartPage from "./pages/LineChartPage";
import AreaChart from "./pages/AreaChartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Ecommerce />,
      },
      // { path: "ecommerce", element: <Ecommerce /> },
      // { path: "orders", element: <Orders /> },
      // {path:"employees", element: <Employees />}
      // { path: "customers", element: <Customers /> },
      // {path:"calendar", element:<BigCalendar />}
      // {path:"line", element:<LineChartPage />}
      {path:"area", element:<AreaChart />}
    ],
  },
]);

function App() {
  const currentMode: "Dark" | "" = "";

  return (
    <div className={currentMode}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
