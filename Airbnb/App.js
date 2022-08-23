import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import Post from "./src/components/Post";

import feed from "./assets/data/feed";

const feeds = feed;

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post feeds={feeds[0]} />
      <Post feeds={feeds[1]} />
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
