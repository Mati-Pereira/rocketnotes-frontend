import axios from "axios";

export const api = axios.create({
  baseURL: "https://apirest-production-d5e9.up.railway.app/",
});
