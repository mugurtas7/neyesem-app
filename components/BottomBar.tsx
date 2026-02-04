import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default function BottomBar({ page = "home" }: { page?: string }) {
    return (
        <View className="absolute bottom-0 left-0 right-0 h-24 bg-white flex-row items-center justify-around px-6 rounded-t-3xl shadow-lg">
            <TouchableOpacity>
                <MaterialIcons name="home" size={28} color={page === "home" ? "#f56e3d" : "#BDBDBD"} />
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialIcons name="history" size={28} color={page === "history" ? "#f56e3d" : "#BDBDBD"} />
            </TouchableOpacity>

            <View className="-top-8">
                <TouchableOpacity className="w-20 h-20 rounded-full bg-primary items-center justify-center shadow-xl">
                    <MaterialIcons name="photo-camera" size={28} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <MaterialIcons name="analytics" size={28} color={page === "analytics" ? "#f56e3d" : "#BDBDBD"} />
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialIcons name="person" size={28} color={page === "profile" ? "#f56e3d" : "#BDBDBD"} />
            </TouchableOpacity>

        </View>
    );
}
