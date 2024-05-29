import axios from "axios";

export const Api = axios.create({
  //baseURL: "https://portal.dmetal.com.br/api-app/dev",
  baseURL: import.meta.env.VITE_REACT_APP_API,
});
