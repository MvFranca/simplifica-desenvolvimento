import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

export function getAPIClient(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.BASE_URL,
  });

  return api;
}
