import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { tokenService } from "../shared/services/tokenService";
import MainLayout from "../shared/components/layouts/MainLayout/MainLayout.component";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

function ProtectedRoute() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasToken = !!tokenService.getToken();

  const handleLogout = () => {
    tokenService.clear();
    dispatch(logout());
    navigate("/login", { replace: true });
  };

 return hasToken ? (
    <MainLayout onLogout={handleLogout}>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;