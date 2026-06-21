import { lazy } from "react";

const LoginPage = lazy(() =>
  import("../features/auth/pages/LoginPage")
);

const Register = lazy(() =>
  import("../features/auth/pages/Register")
);

const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <Register />
  }
];

export default authRoutes;