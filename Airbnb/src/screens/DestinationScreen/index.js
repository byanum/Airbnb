import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import search from "../../../assets/data/search";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationScreen = () => {
  // states
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  const nextScreen = () => {
    navigation.navigate("GuestScreen");
  };
  return (
    <View style={styles.container}>
      {/* input */}
      <View style={styles.autoPlace}>
        <GooglePlacesAutocomplete
          placeholder="where are you going?"
          style={styles.input}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            navigation.navigate("GuestScreen");
          }}
          fetchDetails //give the cords of the location
          query={{
            key: "AIzaSyChcwIGUDhRXxSarNcfZxf_kaL_fii7gLI",
            language: "en",
            type: "(cities)",
          }}
          // suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationScreen;
