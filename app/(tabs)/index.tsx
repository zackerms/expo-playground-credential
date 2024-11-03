import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View>
        <Text>
          EXPO_PUBLIC_APP_VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}
        </Text>
    </View>
  );
}