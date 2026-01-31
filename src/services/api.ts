import { useAuthStore } from "@/store/auth";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common["Content-Type"] = "application/json";

function putToken() {
    axios.defaults.headers.authorization = `Bearer ${useAuthStore.getState().token || ""}`;
}

export async function get(url: string, params?: any) {
    try {
        putToken();
        const res = await axios.get("/" + url, { params });

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
        const res = await axios.post("/" + url, data);

        return {
            ...res,
            status: true
        };
    } catch (error: any) {
        console.log(error.response);
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