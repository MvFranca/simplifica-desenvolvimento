import axios, { AxiosInstance } from 'axios';

export function getAPIClient(): AxiosInstance {
  const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
  });

  return api;
}
