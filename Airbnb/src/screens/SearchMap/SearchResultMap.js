import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import places from "../../../assets/data/feed";
import CustomMarker from "../../components/CustomMarker";
import PostCarousel from "../../components/Post/PostCarouselItem";
import feed from "../../../assets/data/feed";
const SearchResultMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.773972,
          longitude: -122.431297,
          latitudeDelta: 0.007,
          longitudeDelta: 0.007,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            key={place.id}
            isSelected={place.id === selectedPlaceId}
            coordinate={place.coordinate}
            price={place.newPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={styles.carousel}>
        <PostCarousel feeds={feed[0]} />
      </View>
    </View>
  );
};

export default SearchResultMap;
