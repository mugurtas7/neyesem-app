import { put } from "@/services/api";
import { useAuthStore } from "@/store/auth";
import showMessage from "@/utils/message";
import { useNavigation } from "@react-navigation/native";
import AppButton from "components/AppButton";
import GoalSelect from "components/GoalSelect";
import Logo from "components/Logo";
import SliderCard from "components/SliderCard";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InfoScreen() {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);
    const [whatWant, setWhatWant] = useState(0);
    const navigation = useNavigation();

    const handleContinue = async () => {
        const res: any = await put("/auth/info", { height: height / 100, weight, what_want: whatWant });

        if (!res.status) {
            showMessage("error", "Güncelleme Başarısız", res.message || "Bir hata oluştu, lütfen tekrar deneyin.");
            return;
        }

        showMessage("success", "Bilgiler Güncellendi", "Teşekkürler! Yönlendiriliyorsunuz...");
        useAuthStore.getState().hydrate().then(() => {
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Home" as never }],
                });
            }, 1500);
        });


    }

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <ScrollView className="flex-1">
                <View className="flex-1 items-center">
                    <Logo />
                    <Text className="font-bold text-[36px] mt-12 text-center">Sizi Tanıyalım</Text>
                    <View className="w-full px-8 mt-4">
                        <SliderCard value={height} setValue={setHeight} title="Boy" prefix="cm" step={1} min={140} max={210} />
                        <SliderCard value={weight} setValue={setWeight} title="Kilo" prefix="kg" min={40} max={150} />
                        <GoalSelect selected={whatWant} setSelected={setWhatWant} />
                        <AppButton onPress={handleContinue} text="Devam Et" className="mt-8" rounded="rounded-[20px]" />
                    </View>
                    <View className="flex-1 items-center justify-end pb-12 px-8 mt-8">
                        <Text className="text-gray-600 font-regular text-lg text-center">Bu bilgiler, size özel öneriler sunmamıza yardımcı olacak.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}