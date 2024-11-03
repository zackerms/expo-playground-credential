import Constants from "expo-constants";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View>
        <Text>
          API_KEY: {Constants.expoConfig?.extra?.API_KEY}
        </Text>
        <Text>
          APP_NAME: {Constants.expoConfig?.extra?.APP_NAME}
        </Text>
        <Text>
          EXPO_PUBLIC_APP_VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}
        </Text>
    </View>
  );
}