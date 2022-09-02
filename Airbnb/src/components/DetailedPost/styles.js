import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  img: {
    width: "100%",
    aspectRatio: 3 / 2, //for every device
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    color: "grey",
  },
  description: {
    fontSize: 16,
    lineWeight: 26,
  },
  prices: {
    fontSize: 16,
  },

  oldPrice: {
    color: "gray",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "600",
  },
  totalPrice: {
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "300",
    color: "gray",
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 20,
  },
});

export default styles;
