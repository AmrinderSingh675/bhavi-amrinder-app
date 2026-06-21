
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser, logout } from '../authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  
  const { user, token, isLoading, error } = useSelector((state) => state.auth);

  const login = (credentials) => {
    dispatch(loginUser(credentials));
  };

  const register = (userData) => {
    dispatch(registerUser(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    isLoading,
    error,
    login,
    register,
    logout: handleLogout,
    isAuthenticated: !!token,
  };
};