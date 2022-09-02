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
  const map = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlaceId = viewableItems[0].item;
      setSelectedPlaceId(selectedPlaceId.id);
    }
  });
  const width = useWindowDimensions().width;
  const myListRef = useRef(null);

  useEffect(() => {
    if (!selectedPlaceId || !myListRef) {
      return;
    }

    const index = places.findIndex((place) => place.id === selectedPlaceId);
    myListRef.current.scrollToIndex({ index });

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
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
          renderItem={({ item }) => <PostCarousel feeds={item} />}
          data={feed}
          ref={myListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultMap;
