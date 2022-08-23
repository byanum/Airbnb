import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    marginBottom: 20,
  },
  container: {
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center", //upper niche
    marginVertical: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  locationTxt: {},
  iconContainer: {
    backgroundColor: "#FFF2F2",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
});

export default styles;
