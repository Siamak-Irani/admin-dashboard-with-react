import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Ecommerce from "./pages/Ecommerce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Ecommerce />,
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
