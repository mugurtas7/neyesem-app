import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }: { title: string }) {
    const navigation = useNavigation();

    return (
        <View className="w-full px-4 py-2 bg-background-light dark:bg-background-dark flex-row justify-between items-center">
            <Pressable onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#333" />
            </Pressable>
            <Text pointerEvents="none" className="absolute left-0 right-0 text-center text-[20px] font-semibold text-charcoal dark:text-white">
                {title}
            </Text>
        </View>
    );
}