import { ActivityIndicator, View } from "react-native";

export default function Loading() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <ActivityIndicator size="large" color="#f56e3d" />
        </View>
    );
}