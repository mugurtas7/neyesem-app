import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from './store/auth';

import Splash from './screens/public/Splash';
import Register from './screens/public/Register';
import Login from './screens/public/Login';
import Toast from 'react-native-toast-message';
import { toastConfig } from './utils/toast.config';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const isLoggedIn = useAuthStore((s: any) => s.isLoggedIn);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* {isLoggedIn ? (
                    <Stack.Screen name="Home" component={Home} />
                ) : (
                    <>
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>
                )} */}
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
            <Toast config={toastConfig} />
        </NavigationContainer>
    );
}
