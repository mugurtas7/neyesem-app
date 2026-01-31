import { useNavigation } from "@react-navigation/native";
import AppButton from "components/AppButton";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
    const navigation = useNavigation();

    return (
        <View className="flex-1 items-center bg-white dark:bg-charcoal">
            <Image
                source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUa_jn_FofZXut3oxuASHniU15HSTzT3TREp4IY3b7_XsC7-hCBnAlMn3Nj3mgpUcw0iM4tgiXtFrbgEfXIk0Iks4bHcfQgrnFgkfGFZ4RPz4SEZD_c8lYX205jNyqGwkLiF0eJaF_CD403iUTh4FWKj9_o6vCvEXc3y2AWdXmjUqd9MFnIAhcVfLVPE80h5j6Qag9EnYQhAbJuK2ay7muvXT2J0AQcA3owPrIujNgD1o-J5M_AJCGDTLTdY370QXw_GUvRmAu2_A",
                }}
                style={{ width: '100%', height: '65%', resizeMode: 'cover', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
            />
            <Text className="text-charcoal dark:text-white" style={{ fontSize: 40, fontWeight: 900, letterSpacing: 0.7, marginTop: 40 }}>NeYesem?</Text>
            <Text className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-2" style={{ fontSize: 16, paddingHorizontal: 32, fontWeight: 500, textAlign: "center" }}>Günlük öğünlerinde sana en uygun seçimi yapay zekâ ile önerir.</Text>
            <View className="w-full px-20 mt-8">
                <AppButton onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Register' as never }] })} text="Başlayalım" />
            </View>
        </View>
    );
}