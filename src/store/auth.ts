import { create } from 'zustand';

type User = {
    id: string;
    name: string;
    surname: string;
    email: string;
    height: number;
    weight: number;
    bmi_value: number;
};

type AuthState = {
    isLoggedIn: boolean;
    token: string | null;
    user: User | null;

    login: (token: string, user: User) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    token: null,
    user: null,

    login: (token, user) =>
        set({
            isLoggedIn: true,
            token,
            user,
        }),

    logout: () =>
        set({
            isLoggedIn: false,
            token: null,
            user: null,
        }),
}));
