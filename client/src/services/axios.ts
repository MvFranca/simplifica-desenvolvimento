import axios, { AxiosInstance } from 'axios';

export function getAPIClient(): AxiosInstance {
  const api = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL,
    baseURL: "http://localhost:8000/api/",
  });

  return api;
}
