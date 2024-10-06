import axios, { AxiosInstance } from "axios";
import { config } from "./config";

// Create the Axios instance with the base URL and API path
export const httpClient: AxiosInstance = axios.create({
  baseURL: `${config.BASE_SERVER_URL}/${config.BASE_SERVER_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});
