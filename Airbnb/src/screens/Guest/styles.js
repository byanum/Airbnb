import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  rowAdult: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
  },
  txtAdult: {},
  iconContainer: {
    backgroundColor: "#FFF2F2",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  headerAdult: {
    fontSize: 18,
    fontWeight: "600",
  },
  ageAdult: {
    color: "gray",
  },
  btnAdult: {
    flexDirection: "row",
  },
  btn: {
    borderRadius: 30,
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  countAdult: {
    marginHorizontal: 20,
    fontSize: 16,
    marginTop: 15,
  },
  // children
  rowChildren: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
  },
  txtChildren: {},
  iconContainer: {
    backgroundColor: "#FFF2F2",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  headerChildren: {
    fontSize: 18,
    fontWeight: "600",
  },
  ageChildren: {
    color: "gray",
  },
  btnChildren: {
    flexDirection: "row",
  },

  countChildren: {
    marginHorizontal: 20,
    fontSize: 16,
    marginTop: 15,
  },
  //   infants
  rowInfant: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
  },
  txtInfant: {},
  iconContainer: {
    backgroundColor: "#FFF2F2",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  headerInfant: {
    fontSize: 18,
    fontWeight: "600",
  },
  ageInfant: {
    color: "gray",
  },
  btnInfant: {
    flexDirection: "row",
  },

  countInfant: {
    marginHorizontal: 20,
    fontSize: 16,
    marginTop: 15,
  },
  signTxt: {},
});

export default styles;
