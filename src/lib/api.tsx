import axios from "axios";

export const api = axios.create({
  baseURL: "http://epedidosapp.info:8000",
  timeout: 10000,
  headers: {
    "content-Type": "application/json",
  },
});