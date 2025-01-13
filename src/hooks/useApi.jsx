import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

const username = import.meta.env.VITE_REACT_API_USERNAME;
const password = import.meta.env.VITE_REACT_API_PASSWORD;
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

export const useApi = () => ({
  validadeToken: async (authToken, validateToken) => {
    try {
      const response = await api.post(
        "/validateToken",
        {
          authToken,
          validateToken,
        },
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return null;
    }
  },

  signin: async (user, password) => {
    try {
      const response = await api.post(
        "/login",
        { user, password },
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  signout: async () => {
    return true;
  },

  postImage: async (data) => {
    try {
      const response = await api.post("/userimage", data, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response.data.error;
    }
  },

  getImage: async (token) => {
    try {
      const response = await api.get(`/userimage/${token}`, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getAprovacoes: async () => {
    try {
      const response = await api.get("/aprovacoes", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  postAprovacoes: async (data) => {
    try {
      const response = await api.post("/aprovacoes", data, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response.data.error;
    }
  },

  getDespesas: async () => {
    try {
      const response = await api.get("/despesas", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getDescontos: async () => {
    try {
      const response = await api.get("/descontos", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getCancelamentos: async () => {
    try {
      const response = await api.get("/cancelamentos", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getSaidas: async () => {
    try {
      const response = await api.get("/saidas", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasLojas: async () => {
    try {
      const response = await api.get("/vendaslojas", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });

      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasLojasCustom: async () => {
    try {
      const response = await api.get("/vendaslojascustom", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasCupons: async () => {
    try {
      const response = await api.get("/vendascupons", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getVendasGerais: async () => {
    try {
      const response = await api.get("/vendasmes", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getEstoqueGeral: async () => {
    try {
      const response = await api.get("/estoquelojas", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },
  postAnalisereferencias: async (data) => {
    try {
      const response = await api.post("/analisereferencias", data, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response?.data?.error;
    }
  },
  getReferenciasColecoes: async () => {
    try {
      const response = await api.get("/analisereferenciasfiltrocolecoes", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },
  getReferenciasMix: async () => {
    try {
      const response = await api.get("/analisereferenciasfiltromix", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },
  getReferenciasGrupos: async () => {
    try {
      const response = await api.get("/analisereferenciasfiltrogrupos", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  getUsers: async () => {
    try {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  postVendasLojasPeriodo: async (data) => {
    try {
      const response = await api.post("/vendaslojasperiodo", data, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response?.data?.error;
    }
  },

  getLojasAtivas: async () => {
    try {
      const response = await api.get("/lojasativas", {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },
});
