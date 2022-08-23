import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center", //vertical alignement
  },
  title: {
    fontSize: 100,
    fontWeight: "600",
    color: "white",
    width: "70%",
    marginLeft: 25,
  },
  btnTitle: {
    fontSize: 15,
    color: "black",
    fontWeight: "500",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    width: 200,
    height: 40,
    padding: 5,
    marginLeft: 25,
  },
  searchRow: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 20,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    zIndex: 100,
    backgroundColor: "white",
  },
  searchTxt: {
    fontSize: 16,
    color: "gray",
  },
});

export default styles;
