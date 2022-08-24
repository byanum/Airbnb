import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import search from "../../../assets/data/search";
import { useNavigation } from "@react-navigation/native";
import GuestScreen from "../Guest";

const DestinationScreen = () => {
  const navigation = useNavigation();

  const nextScreen = () => {
    navigation.navigate("GuestScreen");
  };
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
          <Pressable onPress={nextScreen} style={styles.row}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="map-marker-alt" size={24} color="#354259" />
            </View>
            <Text style={styles.locationTxt}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationScreen;
