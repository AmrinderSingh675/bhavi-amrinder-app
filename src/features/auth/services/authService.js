
import apiClient from '../../../services/api';

export const loginAPI = async (credentials) => {
  const response = await apiClient.post('/auth/login', credentials);
  if (response.data.token) {
    localStorage.setItem('tokenReactJs', response.data.token);
  }
  return response.data;
};

export const registerAPI = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  if (response.data.token) {
    localStorage.setItem('tokenReactJs', response.data.token);
  }
  return response.data;
};