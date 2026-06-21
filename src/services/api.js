// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ==========================================
// 1. REQUEST INTERCEPTOR: Inject Token Globally
// ==========================================
apiClient.interceptors.request.use(
  (config) => {
    // Grab token from localStorage (or Redux state if preferred)
    const token = localStorage.getItem('token'); 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ==========================================
// 2. RESPONSE INTERCEPTOR: Handle Errors Globally
// ==========================================
// src/services/api.js
// ... (Your exact interceptor code goes here unchanged)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login'; 
    }
    
    // 🔥 This is what allows your Slice's try/catch to work!
    return Promise.reject(error);
  }
);

export default apiClient;