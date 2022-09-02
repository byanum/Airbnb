import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GuestScreen = () => {
  const navigation = useNavigation();

  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countInfant, setCountInfant] = useState(0);

  const addAdult = () => {
    setCountAdult(countAdult + 1);
  };

  const subAdult = () => {
    setCountAdult(Math.max(0, countAdult - 1));
  };

  const addChildren = () => {
    setCountChildren(countChildren + 1);
  };

  const subChildren = () => {
    setCountChildren(Math.max(0, countChildren - 1));
  };
  const addInfant = () => {
    setCountInfant(countInfant + 1);
  };

  const subInfant = () => {
    setCountInfant(Math.max(0, countInfant - 1));
  };
  return (
    <View styles={styles.topContainer}>
      <View>
        {/* row 1: adult */}
        <View style={styles.rowAdult}>
          {/* title */}
          <View style={styles.txtAdult}>
            <Text style={styles.headerAdult}>Adults</Text>
            <Text style={styles.ageAdult}>Ages 13 or above</Text>
          </View>
          {/* button */}
          <View style={styles.btnAdult}>
            <Pressable style={styles.btn} onPress={subAdult}>
              <Text style={styles.signTxt}>-</Text>
            </Pressable>

            {/* number */}
            <Text style={styles.countAdult}>{countAdult}</Text>

            <Pressable style={styles.btn} onPress={addAdult}>
              <Text style={styles.signTxt}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* row 2: children */}
        <View style={styles.rowChildren}>
          {/* title */}
          <View style={styles.txtChildren}>
            <Text style={styles.headerChildren}>Childrens</Text>
            <Text style={styles.ageChildren}>Ages 13 or above</Text>
          </View>
          {/* button */}
          <View style={styles.btnChildren}>
            <Pressable style={styles.btn} onPress={subChildren}>
              <Text style={styles.signTxt}>-</Text>
            </Pressable>

            {/* number */}
            <Text style={styles.countChildren}>{countChildren}</Text>

            <Pressable style={styles.btn} onPress={addChildren}>
              <Text style={styles.signTxt}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* row 3: guest */}
        <View style={styles.rowInfant}>
          {/* title */}
          <View style={styles.txtInfant}>
            <Text style={styles.headerInfant}>Infants</Text>
            <Text style={styles.ageInfant}>Ages 13 or above</Text>
          </View>
          {/* button */}
          <View style={styles.btnInfant}>
            <Pressable style={styles.btn} onPress={subInfant}>
              <Text style={styles.signTxt}>-</Text>
            </Pressable>

            {/* number */}
            <Text style={styles.countInfant}>{countInfant}</Text>

            <Pressable style={styles.btn} onPress={addInfant}>
              <Text style={styles.signTxt}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* search button */}

      <Pressable
        onPress={() =>
          navigation.navigate("HomeTabNavigator", {
            screen: "Explore",
            params: {
              screen: "PostScreen",
            },
          })
        }
        style={styles.searchBtn}
      >
        <Text>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
