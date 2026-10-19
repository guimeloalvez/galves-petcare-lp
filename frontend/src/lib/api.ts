import axios from "axios";

import { readSession } from "../features/auth/storage/auth.storage";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const session = readSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.token}`;
  }

  return config;
});
