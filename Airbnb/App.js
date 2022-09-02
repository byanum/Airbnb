import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import Post from "./src/components/Post";

import feed from "./assets/data/feed";
import PostScreen from "./src/screens/PostScreen";
import DestinationScreen from "./src/screens/DestinationScreen";
import GuestScreen from "./src/screens/Guest";
import RootNavigator from "./src/navigation/RootNavigator";
// const feeds = feed[0];

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
