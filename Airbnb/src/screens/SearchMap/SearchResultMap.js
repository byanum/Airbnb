import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import places from "../../../assets/data/feed";
import CustomMarker from "../../components/CustomMarker";
import PostCarousel from "../../components/Post/PostCarouselItem";
import feed from "../../../assets/data/feed";

const SearchResultMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const myListRef = useRef(null);

  useEffect(() => {
    if (!selectedPlaceId || !myListRef) {
      return;
    }

    const index = places.findIndex((place) => place.id === selectedPlaceId);
    myListRef.current.scrollToIndex({ index });
  }, [selectedPlaceId]);

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
        <FlatList
          ref={myListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          data={feed}
          renderItem={({ item }) => <PostCarousel feeds={item} />}
        />
      </View>
    </View>
  );
};

export default SearchResultMap;
