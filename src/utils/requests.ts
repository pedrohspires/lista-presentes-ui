import { createAxiosInstance } from "../axiosInstanceConfig";

type MyAxiosResponse<T> = {
    status: number;
    message?: string;
    dados?: T;
}

export async function getRequest<T>(url: string): Promise<MyAxiosResponse<T>> {
    const axiosInstance = createAxiosInstance();

    try {
        const response = await axiosInstance.get(url);
        return {
            status: response.status,
            dados: response.data
        }
    } catch (error: any) {
        if (error.response) {
            return {
                status: error.response.status,
                message: error.response.data
            }
        } else {
            return {
                status: 0,
                message: error.message
            }
        }
    }
}