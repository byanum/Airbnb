import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

const SuggestionRow = ({ item }) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#354259" />
        </View>
        <Text style={styles.locationTxt}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SuggestionRow;
