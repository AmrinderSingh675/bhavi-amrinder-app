export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "auth/register",
  },

  USERS: {
    GET_ALL: "users",
    GET_BY_ID: (id) => `users/${id}`,
    CREATE: "users",
    UPDATE: (id) => `users/${id}`,
    DELETE: (id) => `users/${id}`,
  },
};