import { post } from "@/services/api";
import showMessage from "@/utils/message";
import { useNavigation } from "@react-navigation/native";
import AppButton from "components/AppButton";
import Header from "components/Header";
import InputWithLabel from "components/InputWithLabel";
import PasswordInput from "components/PasswordInput";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function Register() {
    const navigation = useNavigation();

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    const handleInputChange = (value: string, field: string) => {
        setData({
            ...data,
            [field]: value
        });
    }

    const register = async () => {
        if (!data.name || !data.surname || !data.email || !data.password) {
            showMessage("error", "Eksik Bilgi", "Lütfen tüm alanları doldurun.");
            return;
        }

        if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
            showMessage("error", "Geçersiz E-Posta", "Lütfen geçerli bir e-posta adresi girin.");
            return;
        }

        const res: any = await post("/auth/register-fast", data);

        console.log(res);

        if (!res.status) {
            showMessage("error", "Kayıt Başarısız", res.message || "Bir hata oluştu, lütfen tekrar deneyin.");
            return;
        }

        showMessage("success", "Kayıt Başarılı", "Hesabınız başarıyla oluşturuldu, giriş sayfasına yönlendiriliyorsunuz...");

        setTimeout(() => {
            navigation.reset({ index: 0, routes: [{ name: 'Login' as never }] });
        }, 2000);
    }

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <Header title="Kayıt Ol" />
            <View className="flex-1 w-full px-8 pt-8">
                <Text className="font-bold text-[32px]">Aramıza Katıl</Text>
                <Text className="text-gray-600 font-regular text-xl mt-2">Sağlıklı yaşam serüvenine bugün başla</Text>

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <ScrollView className="flex-1 w-full pt-8" contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                        <InputWithLabel onChange={(val) => handleInputChange(val, "name")} label="Adınız" placeholder="Adınız..." />
                        <InputWithLabel onChange={(val) => handleInputChange(val, "surname")} className="mt-5" label="Soyadınız" placeholder="Soyadınız..." />
                        <InputWithLabel onChange={(val) => handleInputChange(val, "email")} className="mt-5" label="E-Posta Adresiniz" placeholder="E-posta adresiniz..." />
                        <PasswordInput onChange={(val) => handleInputChange(val, "password")} className="mt-5" label="Şifre" placeholder="Şifre..." />
                        <AppButton onPress={register} text="Kayıt Ol" className="mt-8 shadow-xl shadow-primary" rounded="rounded-[20px]" />
                        <View className="w-full flex-row items-center mt-5">
                            <View className="flex-1 h-px bg-background-dark/10 dark:bg-white/10" />
                            <Text className="px-4 text-charcoal/40 dark:text-white/40 text-md flex-shrink-0">veya</Text>
                            <View className="flex-1 h-px bg-background-dark/10 dark:bg-white/10" />
                        </View>
                        <View className="mt-5 flex-row justify-center flex-wrap">
                            <Text className="text-sage-green font-medium text-lg">
                                Zaten bir hesabın var mı?{" "}
                            </Text>

                            <Pressable onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' as never }] })}>
                                <View>
                                    <Text className="text-primary font-bold text-lg">
                                        Giriş Yap
                                    </Text>
                                    <View className="h-px bg-primary/30 mt-0" />
                                </View>
                            </Pressable>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}