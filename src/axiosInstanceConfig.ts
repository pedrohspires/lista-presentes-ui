import axios from "axios";

export function createAxiosInstance() {
    const api_url = import.meta.env.VITE_API_URL;

    const instance = axios.create({
        baseURL: api_url,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
        },
    });

    instance.interceptors.request.use(
        (config) => {
            console.log("Enviando requisição para:", config.url);
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error("Erro na requisição:", error);
            return Promise.reject(error);
        }
    );

    return instance;
}
