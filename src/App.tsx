import React, { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Orders = lazy(() => import("./pages/Orders"));
const Employees = lazy(() => import("./pages/Employees"));
const Customers = lazy(() => import("./pages/Customers"));
const BigCalendar = lazy(() => import("./pages/BigCalendar"));
const LineChartPage = lazy(() => import("./pages/LineChartPage"));
const AreaChart = lazy(() => import("./pages/AreaChartPage"));

// <Suspense fallback={<div></div>}></Suspense>

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div></div>}>
            <Ecommerce />
          </Suspense>
        ),
      },
      {
        path: "ecommerce",
        element: (
          <Suspense fallback={<div></div>}>
            {" "}
            <Ecommerce />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<div></div>}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "employees",
        element: (
          <Suspense fallback={<div></div>}>
            <Employees />{" "}
          </Suspense>
        ),
      },
      {
        path: "customers",
        element: (
          <Suspense fallback={<div></div>}>
            {" "}
            <Customers />{" "}
          </Suspense>
        ),
      },
      {
        path: "calendar",
        element: (
          <Suspense fallback={<div></div>}>
            <BigCalendar />{" "}
          </Suspense>
        ),
      },
      {
        path: "line",
        element: (
          <Suspense fallback={<div></div>}>
            <LineChartPage />
          </Suspense>
        ),
      },
      {
        path: "area",
        element: (
          <Suspense fallback={<div></div>}>
            {" "}
            <AreaChart />
          </Suspense>
        ),
      },
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
