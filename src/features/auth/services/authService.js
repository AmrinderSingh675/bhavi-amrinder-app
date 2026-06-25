import { baseApiService } from "../../../app/api/baseApiService";
import { API_ENDPOINTS } from "../../../app/constants/apiEndpoints";

export const authService = {
  login(data) {
    //debugger;
    return baseApiService.post(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );
  },

  register(data) {
    return baseApiService.post(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );
  },
};