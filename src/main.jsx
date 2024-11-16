import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./componenets/AddCoffee.jsx";
import UpdateCoffee from "./componenets/UpdateCoffee.jsx";
import SignIn from "./componenets/SignIn.jsx";
import SignUp from "./componenets/SignUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./componenets/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-store-server-10vv25fdp-liserezvees-projects.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-10vv25fdp-liserezvees-projects.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-10vv25fdp-liserezvees-projects.vercel.app/user")
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
