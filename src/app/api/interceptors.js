import axiosClient from "./axiosClient";
import { tokenService } from "../../shared/services/tokenService";
import { errorHandler } from "../../shared/handlers/errorHandler";
import { loaderService } from "./loaderService"; 

export const setupInterceptors = () => {
  axiosClient.interceptors.request.use(
    (config) => {
      loaderService.show(); 
      
      const token = tokenService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      loaderService.hide(); 
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (response) => {
      loaderService.hide(); 
      return response;
    },
    (error) => {
      loaderService.hide(); 
      errorHandler.handle(error);
      return Promise.reject(error);
    }
  );
};