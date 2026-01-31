import { Dimensions, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const { width } = Dimensions.get('window');

export const toastConfig = {
  success: (props: any) => (
    <View
      className="bg-green-500 dark:bg-green-700 px-5 py-4 rounded-[20px]"
      style={{ minHeight: 60, width: width * 0.9 }}
    >
      <Text className="text-white dark:text-white text-base font-semibold text-lg">
        {props.text1}
      </Text>
      {props.text2 && (
        <Text className="text-white dark:text-white/80 text-md mt-1">
          {props.text2}
        </Text>
      )}
    </View>
  ),
  error: (props: any) => (
    <View
      className="bg-red-500 dark:bg-red-700 px-5 py-4 w-full rounded-[20px]"
      style={{ minHeight: 60, width: width * 0.9 }}
    >
      <Text className="text-white text-base font-semibold text-lg">
        {props.text1}
      </Text>
      {props.text2 && (
        <Text className="text-white text-md mt-1">
          {props.text2}
        </Text>
      )}
    </View>
  )
};
