import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import productRoutes from "./productRoutes";
import authRoutes from "./authRoutes";
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import { tokenService } from "../shared/services/tokenService";

function AppRoutes() {
  const hasToken = !!tokenService.getToken();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/" element={<Navigate to={hasToken ? "/dashboard" : "/login"} replace />} />

          {authRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            {productRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          <Route element={<ProtectedRoute />}>
            {productRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

       <Route 
            path="*" 
            element={<Navigate to={hasToken ? "/dashboard" : "/login"} replace />} 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;