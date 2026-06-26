import { useDispatch } from "react-redux";
import { tokenService } from "../../../shared/services/tokenService";
import { authService } from "../services/authService";
import { login } from "../authSlice";


export const useAuth = () => {
  const dispatch = useDispatch();

  const loginUser = async (credentials) => {
    try {
      //debugger;
      const result = await authService.login(credentials);
      debugger;
      if (!result || !result.token) {
        return false;
      }
      tokenService.setToken(result.token);

       dispatch(
        login({
          user: result.user,
          token: result.token,
        })
      );

      return true;
    } catch (error) {
      //console.error("Login failed in hook:", error);
      return false; 
    }
  };
  //debugger;
  return { loginUser };
};