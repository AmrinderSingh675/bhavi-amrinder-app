export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "auth/register",
  },

  PRODUCTS: {
    GET_ALL: "/product",
    GET_BY_ID: (id) => `/product/${id}`,
    CREATE: "/product",
    UPDATE: (id) => `/product/${id}`,
    DELETE: (id) => `/product/${id}`,
  },
};