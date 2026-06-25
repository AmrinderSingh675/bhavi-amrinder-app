import { Navigate } from "react-router-dom";
import { tokenService } from "../../../shared/services/tokenService";

const ProtectedRoute = ({ children }) => {
  const token =
    tokenService.getToken();

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;