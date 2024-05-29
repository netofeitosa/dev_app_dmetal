import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

export const useApi = () => ({
  validadeToken: async (token) => {
    try {
      const response = await api.post("/validateToken", { token });
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
