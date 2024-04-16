import React from "react";
import Users from "./user/pages/Users";
import Home from "./places/pages/Home";
import NotFound from "./places/pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/user",
      Component: Users,
    },
    {
      path: "/",
      Component: Home,
      errorElement: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
