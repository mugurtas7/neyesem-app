import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from './store/auth';

import Splash from './screens/public/Splash';
import Register from './screens/public/Register';
import Login from './screens/public/Login';
import Toast from 'react-native-toast-message';
import { toastConfig } from './utils/toast.config';
import Home from './screens/Home';
import InfoScreen from './screens/InfoScreen';
import AppStack from './stacks/AppStack';
import AuthStack from './stacks/AuthStack';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const { isLoggedIn } = useAuthStore();

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
            <Toast config={toastConfig} />
        </NavigationContainer>
    );
}
