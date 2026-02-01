import { post } from "@/services/api";
import { useAuthStore } from "@/store/auth";
import showMessage from "@/utils/message";
import { useNavigation } from "@react-navigation/native";
import AppButton from "components/AppButton";
import Header from "components/Header";
import InputWithLabel from "components/InputWithLabel";
import Logo from "components/Logo";
import PasswordInput from "components/PasswordInput";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        const data = {
            email: email.trim(),
            password: password.trim()
        };
        console.log("data: ", data);
        
        if (!data.email || !data.password) {
            showMessage("error", "Eksik Bilgi", "Lütfen tüm alanları doldurun.");
            return;
        }

        if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
            showMessage("error", "Geçersiz E-Posta", "Lütfen geçerli bir e-posta adresi girin.");
            return;
        }

        const res: any = await post("/auth/login", data);

        if (!res.status) {
            showMessage("error", "Giriş Başarısız", res.message || "Bir hata oluştu, lütfen tekrar deneyin.");
            return;
        }

        showMessage("success", "Giriş Başarılı", "Hoş geldiniz! Yönlendiriliyorsunuz...");

        useAuthStore.getState().login(res.data.token, res.data.user);

        if (res.data.user.height === 0 || res.data.user.weight === 0) {
            navigation.reset({ index: 0, routes: [{ name: 'InfoScreen' as never }] });
            return;
        }

        setTimeout(() => {
            navigation.reset({ index: 0, routes: [{ name: 'Home' as never }] });
        }, 2000);
    }

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <View className="flex-1 w-full px-8 pt-8">
                <Logo />
                <Text className="font-bold text-[36px] mt-12 text-center">Giriş Yap</Text>
                <Text className="text-gray-600 font-regular text-xl mt-2 text-center">Sağlıklı bir yaşam için lezzetli keşifler seni bekliyor.</Text>
                <View className="flex-1 w-full pt-8">
                    <InputWithLabel value={email} onChange={setEmail} className="mt-5" label="E-Posta Adresiniz" placeholder="E-posta adresiniz..." />
                    <PasswordInput value={password} onChange={setPassword} className="mt-5" label="Şifre" placeholder="Şifre..." />
                    <AppButton onPress={login} text="Giriş Yap" className="mt-8 shadow-xl shadow-primary" rounded="rounded-[20px]" />
                    <View className="w-full flex-row items-center mt-5">
                        <View className="flex-1 h-px bg-background-dark/10 dark:bg-white/10" />
                        <Text className="px-4 text-charcoal/40 dark:text-white/40 text-md flex-shrink-0">veya</Text>
                        <View className="flex-1 h-px bg-background-dark/10 dark:bg-white/10" />
                    </View>
                    <View className="mt-5 flex-row justify-center flex-wrap">
                        <Text className="text-sage-green font-medium text-lg">
                            Hesabınız yok mu?{" "}
                        </Text>

                        <Pressable onPress={() => navigation.navigate("Register" as never)}>
                            <View>
                                <Text className="text-primary font-bold text-lg">
                                    Kayıt Ol
                                </Text>
                                <View className="h-px bg-primary/30 mt-0" />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}