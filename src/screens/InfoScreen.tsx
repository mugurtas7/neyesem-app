import Logo from "components/Logo";
import SliderCard from "components/SliderCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InfoScreen() {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 items-center">
                <Logo />
                <Text className="font-bold text-[36px] mt-12 text-center">Sizi Tanıyalım</Text>
                <SliderCard defaultValue={170} title="Boy" prefix="cm" min={140} max={210} />
                <View className="h-6"></View>
                <SliderCard defaultValue={70} title="Kilo" prefix="kg" min={40} max={150} />
            </View>
        </SafeAreaView>
    );
}