import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const explore = () => {
    console.warn("Explore");
  };

  const search = () => {
    console.warn("Search");
  };
  return (
    <View>
      {/* button */}

      <Pressable style={styles.searchRow} onPress={search}>
        <Feather name="search" size={24} color="#F94892" />
        <Text style={styles.searchTxt}>Where are you going?</Text>
      </Pressable>

      {/* image */}
      <ImageBackground
        source={require("../../../assets/wallpaper.jpg")}
        style={styles.image}
      >
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* button */}
        <Pressable style={styles.btn} onPress={explore}>
          <Text style={styles.btnTitle}>Explore Nearby Stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
