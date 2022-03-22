import React from "react";
import Error from "../pages/ErrorPage";
import Login from "../pages/LoginPage";
import SignUp from "../pages/SignUpPage";
import Todos from "../pages/TodosPage";

const publicRoutes = [
  { path: "/", element: <Login /> },
  { path: "sign", element: <SignUp /> },
  { path: "*", element: <Error /> },
];

const privateRoutes = [
  { path: "/", element: <Todos /> },
  { path: "*", element: <Error /> },
];

export { publicRoutes, privateRoutes };
