import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
export default function Page() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
