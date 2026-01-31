import { Text, TextInput, View } from "react-native";

export default function InputWithLabel({ onChange, className = "", label, placeholder }: { onChange?: (text: string) => void, className?: string, label: string; placeholder: string }) {
    return (
        <View className={`w-full ${className}`}>
            <Text className="text-lg pl-1 text-charcoal dark:text-white font-semibold">{label}</Text>
            <TextInput onChangeText={onChange} className="h-[60px] px-5 py-0 text-xl font-regular text-charcoal dark:text-white bg-white dark:bg-charcoal mt-2 rounded-[16px]" placeholder={placeholder}></TextInput>
        </View>
    );
}