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
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (value: string, field: string) => {
        setData({
            ...data,
            [field]: value
        });
    }

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <View className="flex-1 w-full px-8 pt-8">
                <Logo />
                <Text className="font-bold text-[36px] mt-12 text-center">Giriş Yap</Text>
                <Text className="text-gray-600 font-regular text-xl mt-2 text-center">Sağlıklı bir yaşam için lezzetli keşifler seni bekliyor.</Text>
                <View className="flex-1 w-full pt-8">
                    <InputWithLabel onChange={(val) => handleInputChange(val, "email")} className="mt-5" label="E-Posta Adresiniz" placeholder="E-posta adresiniz..." />
                    <PasswordInput onChange={(val) => handleInputChange(val, "password")} className="mt-5" label="Şifre" placeholder="Şifre..." />
                    <AppButton onPress={() => console.log("Test")} text="Giriş Yap" className="mt-8 shadow-xl shadow-primary" rounded="rounded-[20px]" />
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