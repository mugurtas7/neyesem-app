import { useAuthStore } from "@/store/auth";
import axios from "axios";

axios.defaults.baseURL = "https://superdomineering-sacrificially-rae.ngrok-free.dev";
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.response.use(
  res => res,
  async error => {
    if (error.response?.status === 401) {
      await useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

function putToken() {
    axios.defaults.headers.authorization = `Bearer ${useAuthStore.getState().token || ""}`;
}

export async function get(url: string, params?: any) {
    try {
        putToken();
        const res = await axios.get(url, { params });

        return {
            ...res,
            status: true
        };
    } catch (error) {
        return handleError(error);
    }
}

export async function post(url: string, data?: any) {
    try {
        putToken();
        
        const res = await axios.post(url, data);

        return {
            ...res.data,
            status: true
        };
    } catch (error: any) {
        return handleError(error);
    }
}

export async function put(url: string, data?: any) {
    try {
        putToken();
        
        const res = await axios.put(url, data);

        return {
            ...res.data,
            status: true
        };
    } catch (error: any) {
        console.error(error);
        return handleError(error);
    }
}

function handleError(error: any) {
    if (axios.isAxiosError(error)) {
        return {
            status: false,
            message:
                error.response?.data?.message ||
                "Bir hata oluştu, lütfen tekrar deneyin"
        };
    }

    return {
        success: false,
        message: "Beklenmeyen bir hata oluştu",
    };
}