import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import search from "../../../assets/data/search";

const DestinationScreen = () => {
  // states
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      {/* input */}
      <TextInput
        style={styles.input}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* list of destinations */}
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="map-marker-alt" size={24} color="#354259" />
            </View>
            <Text style={styles.locationTxt}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationScreen;
