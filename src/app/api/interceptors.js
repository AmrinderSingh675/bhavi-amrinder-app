// src/app/api/interceptors.js
import axiosClient from "./axiosClient";
import { tokenService } from "../../shared/services/tokenService";
import { errorHandler } from "../../shared/handlers/errorHandler";
import { loaderService } from "./loaderService"; // 1. Import the loader service

export const setupInterceptors = () => {
  axiosClient.interceptors.request.use(
    (config) => {
      loaderService.show(); // 2. Show loader on every request
      
      const token = tokenService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      loaderService.hide(); // Hide if request configuration fails
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (response) => {
      loaderService.hide(); // 3. Hide loader when request succeeds
      return response;
    },
    (error) => {
      loaderService.hide(); // 4. Hide loader when request fails
      errorHandler.handle(error);
      return Promise.reject(error);
    }
  );
};