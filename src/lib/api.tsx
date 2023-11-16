import axios from "axios";

export const api = axios.create({
  baseURL: "https://epedidosapp.info",
  timeout: 10000,
  headers: {
    "content-Type": "application/json",
  },
});