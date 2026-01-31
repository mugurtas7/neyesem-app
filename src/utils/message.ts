import Toast from "react-native-toast-message";

export default function showMessage(type: string, title: string, message: string) {
    Toast.show({
        type: type,
        text1: title,
        text2: message,
        position: "bottom"
    });
}