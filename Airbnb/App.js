import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import Post from "./src/components/Post";

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
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
