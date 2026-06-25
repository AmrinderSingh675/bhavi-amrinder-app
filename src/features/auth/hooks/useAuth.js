import { tokenService } from "../../../shared/services/tokenService";
import { authService } from "../services/authService";


export const useAuth = () => {
  const login = async (credentials) => {
    try {
      const result = await authService.login(credentials);
      if (!result || !result.data) {
        return false;
      }
      tokenService.setToken(result.data.token);
      return true;
    } catch (error) {
      console.error("Login failed in hook:", error);
      return false; 
    }
  };

  return { login };
};