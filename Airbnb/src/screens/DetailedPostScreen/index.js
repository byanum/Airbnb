import { View, Text } from "react-native";
import React from "react";
import DetailedPost from "../../components/DetailedPost";
import places from "../../../assets/data/feed";
import { useRoute } from "@react-navigation/native";
const DetailedPostScreen = () => {
  const route = useRoute();

  const feeds = places.find((place) => place.id === route.params.feedId);
  //   console.warn(route.params);
  return (
    <View>
      <DetailedPost feeds={feeds} />
    </View>
  );
};

export default DetailedPostScreen;
