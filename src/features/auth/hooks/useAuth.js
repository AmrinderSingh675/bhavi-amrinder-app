import { tokenService } from "../../../shared/services/tokenService";
import { authService } from "../services/authService";


export const useAuth = () => {
  const login = async (credentials) => {
    try {
      //debugger;
      const result = await authService.login(credentials);
      debugger;
      if (!result || !result.token) {
        return false;
      }
      tokenService.setToken(result.token);
      return true;
    } catch (error) {
      //console.error("Login failed in hook:", error);
      return false; 
    }
  };
  //debugger;
  return { login };
};