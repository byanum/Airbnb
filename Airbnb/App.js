import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import Post from "./src/components/Post";

import feed from "./assets/data/feed";
import PostScreen from "./src/screens/PostScreen";
import DestinationScreen from "./src/screens/DestinationScreen";

// const feeds = feed[0];

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <PostScreen /> */}
      <DestinationScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
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
