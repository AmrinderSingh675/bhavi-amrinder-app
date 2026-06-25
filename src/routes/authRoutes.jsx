import { lazy } from "react";

const LoginPage = lazy(() =>
  import("../features/auth/pages/LoginPage")
);

const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />
  }
];

export default authRoutes;