import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

const goals = [
    {
        value: 0,
        title: "Kilo Almak",
        desc: "Kas ve kilo artışı hedefliyorum",
    },
    {
        value: 1,
        title: "Kilo Vermek",
        desc: "Yağ oranımı düşürmek istiyorum",
    },
    {
        value: 2,
        title: "Sağlıklı Kalmak",
        desc: "Formumu korumak istiyorum",
    },
];

export default function GoalSelect({ selected = 0, setSelected }: { selected?: number, setSelected: (goal: number) => void }) {
    return (
        <View className="mt-6">
            <Text className="text-lg font-semibold mb-4">
                Hedefiniz nedir?
            </Text>

            <View className="space-y-3">
                {goals.map((goal) => {
                    const isActive = selected === goal.value;

                    return (
                        <TouchableOpacity
                            key={goal.value}
                            onPress={() => setSelected(goal.value)}
                            className={`p-4 rounded-2xl border ${isActive
                                    ? "border-orange-500 bg-orange-50"
                                    : "border-gray-200 bg-white"
                                }`}
                        >
                            <Text
                                className={`text-base font-semibold ${isActive ? "text-orange-600" : "text-gray-900"
                                    }`}
                            >
                                {goal.title}
                            </Text>

                            <Text className="text-sm text-gray-500 mt-1">
                                {goal.desc}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
