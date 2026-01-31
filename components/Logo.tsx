import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";

export default function Logo() {
    return (
        <View className="w-full flex-row gap-2 items-center justify-center">
            <MaterialIcons name="restaurant" size={40} color="#f56e3d" />
            <Text className="font-bold text-[28px]">NeYesem?</Text>
        </View>
    );
}