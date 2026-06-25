import { Navigate, Outlet } from "react-router-dom";
import { tokenService } from "../shared/services/tokenService";
import MainLayout from "../shared/components/layouts/MainLayout/MainLayout.component";

function ProtectedRoute() {

  const hasToken = !!tokenService.getToken();

 return hasToken ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;