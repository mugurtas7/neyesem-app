import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function SliderCard({ defaultValue, title, prefix, min, max, step = 0.1 }: { defaultValue: number, title: string, prefix: string, min: number, max: number, step?: number }) {
    const [value, setValue] = useState(defaultValue);

    return (
        <View className="w-full px-6 mt-6">
            <View className="flex-row justify-between items-end mb-4">
                <Text className="text-gray-500 text-base">{title}</Text>
                <Text className="text-3xl font-semibold">
                    {value.toFixed(1)}{" "}
                    <Text className="text-base text-gray-400">{prefix}</Text>
                </Text>
            </View>

            <Slider
                minimumValue={min}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={setValue}
                minimumTrackTintColor="#7BAE7F"
                maximumTrackTintColor="#E5E7EB"
                thumbTintColor="#F97316"
            />

            <View className="flex-row justify-between mt-2">
                <Text className="text-xs text-gray-400">{min}{prefix}</Text>
                <Text className="text-xs text-gray-400">{max}{prefix}</Text>
            </View>
        </View>
    );
}
