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

  postImage: async (data) => {
    try {
      const response = await api.post("/userimage", data);
      return response.data;
    } catch (error) {
      return error.response.data.error;
    }
  },

  getAprovacoes: async () => {
    try {
      const response = await api.get("/aprovacoes");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  postAprovacoes: async (data) => {
    try {
      const response = await api.post("/aprovacoes", data);
      return response.data;
    } catch (error) {
      return error.response.data.error;
    }
  },

  getDespesas: async () => {
    try {
      const response = await api.get("/despesas");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getDescontos: async () => {
    try {
      const response = await api.get("/descontos");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getCancelamentos: async () => {
    try {
      const response = await api.get("/cancelamentos");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getSaidas: async () => {
    try {
      const response = await api.get("/saidas");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasLojas: async () => {
    try {
      const response = await api.get("/vendaslojas");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasCupons: async () => {
    try {
      const response = await api.get("/vendascupons");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasGerais: async () => {
    try {
      const response = await api.get("/vendasmes");
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getEstoqueGeral: async () => {
    try {
      const response = await api.get("/estoquelojas");
      return response.data;
    } catch (error) {
      return null;
    }
  },
});
