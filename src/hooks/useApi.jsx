import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

export const useApi = () => ({
  validadeToken: async (authToken, validateToken) => {
    try {
      const response = await api.post("/validateToken", {
        authToken,
        validateToken,
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  signin: async (user, password) => {
    try {
      const response = await api.post("/login", { user, password });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  signout: async () => {
    return true;
  },
});
