import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from '@/services/api';

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
    initialRoute: 'Home' | 'InfoScreen';

    login: (token: string, user: any) => Promise<void>;
    logout: () => Promise<void>;
    hydrate: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    initialRoute: 'Home',
    token: null,
    user: null,

    login: async (token, user) => {
        await AsyncStorage.setItem('token', token);

        set({
            token,
            user,
            initialRoute: user.height === 0 || user.weight === 0 ? 'InfoScreen' : 'Home',
            isLoggedIn: true,
        });
    },

    logout: async () => {
        await AsyncStorage.removeItem('token');

        set({
            isLoggedIn: false,
            token: null,
            user: null,
            initialRoute: 'Home',
        });
    },

    hydrate: async () => {
        const token = await AsyncStorage.getItem('token');

        if (!token) return;

        set({
            token
        });

        try {
            const res: any = await get('/auth/me');

            const user = res.data.user;

            set({
                isLoggedIn: true,
                token,
                user,
                initialRoute:
                    user.height === 0 || user.weight === 0 ? 'InfoScreen' : 'Home',
            });
        } catch (err) {
            await AsyncStorage.removeItem('token');
            set({ isLoggedIn: false, token: null, user: null });
        }
    },
}));
