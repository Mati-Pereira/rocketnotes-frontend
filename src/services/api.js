import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-back.onrender.com",
});
