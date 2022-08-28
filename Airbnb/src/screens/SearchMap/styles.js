import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  marker: {
    backgroundColor: "white",
    padding: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "grey",
  },
});

export default styles;
