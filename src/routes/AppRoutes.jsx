import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import productRoutes from "./productRoutes";
import authRoutes from "./authRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/" element={<Navigate to="/login" replace />} />

          {authRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          <Route element={<ProtectedRoute />}>
            {productRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;