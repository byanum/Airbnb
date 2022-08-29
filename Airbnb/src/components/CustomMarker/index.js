import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import styles from "./styles";
const CustomMarker = ({ coordinate, price, onPress, isSelected }) => {
  return (
    <Marker
      coordinate={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: isSelected ? "black" : "white",
          padding: 10,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: "grey",
        }}
      >
        <Text
          style={{ color: isSelected ? "white" : "black", fontWeight: "600" }}
        >
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
