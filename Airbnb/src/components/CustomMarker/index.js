import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const CustomMarker = ({ coordinate, price, onPress, isSelected }) => {
  return (
    <Marker coordinate={{ coordinate }}>
      <View style={styles.marker}>
        <Text>{price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
