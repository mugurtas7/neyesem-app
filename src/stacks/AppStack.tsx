import Home from "@/screens/Home";
import InfoScreen from "@/screens/InfoScreen";
import { useAuthStore } from "@/store/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    const initialRoute = useAuthStore((s) => s.initialRoute);

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={initialRoute}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="InfoScreen" component={InfoScreen} />
        </Stack.Navigator>
    );
};

export default AppStack;