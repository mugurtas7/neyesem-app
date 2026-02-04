import BottomBar from "components/BottomBar";
import Logo from "components/Logo";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <View className="flex-1">
            <SafeAreaView className="flex-1">
                <View className="flex-1 items-center pt-4">
                    <Logo />
                    <Image />
                </View>
            </SafeAreaView>
            <BottomBar />
        </View>
    );
}