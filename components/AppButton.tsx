import { Text, TouchableOpacity } from "react-native";

export default function AppButton({ onPress, text, rounded, className = "" }: { onPress?: () => void, text: string, rounded?: string, className?: string }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={`flex w-full items-center justify-center overflow-hidden ${rounded ?? "rounded-xl"} px-5 py-5 bg-primary ${className}`}
            onPress={onPress}
        >
            <Text className="text-white text-xl font-bold tracking-wide">
                {text}
            </Text>
        </TouchableOpacity>
    );
}