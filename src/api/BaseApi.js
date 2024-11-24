import axios from "axios";

const baseURL = process.env.URL || "http://localhost:8000";

//This Api instance is responsible for all the app api's feature apis
const baseApi = axios.create({
  baseURL: baseURL,
  timeout: 50000,
});

export { baseApi };
