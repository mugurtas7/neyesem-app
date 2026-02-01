import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function PasswordInput({ onChange, className = "", label, placeholder, value }: { onChange: (text: string) => void, className?: string, label: string; placeholder: string, value?: string }) {
    const [visible, setVisible] = useState(false);
    
    return (
        <View className={`w-full relative ${className}`}>
            <Text className="text-lg pl-1 text-charcoal dark:text-white font-semibold">{label}</Text>
            <View className="w-full relative">
                <TextInput onChange={(e) => onChange(e.nativeEvent.text)} onChangeText={onChange} className="h-[60px] px-5 py-0 text-xl font-regular text-charcoal dark:text-white bg-white dark:bg-charcoal mt-2 rounded-[16px]" secureTextEntry={!visible} placeholder={placeholder}></TextInput>
                <Pressable onPress={() => setVisible(!visible)} className="absolute right-4 inset-y-0 flex justify-center">
                    <MaterialIcons name={visible ? "visibility" : "visibility-off"} size={24} color="#9CA3AF" />
                </Pressable>
            </View>
        </View>
    );
}