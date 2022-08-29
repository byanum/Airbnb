import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PostCarousel = ({ feeds }) => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postId: post.id });
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, { width: width - 60 }]}
    >
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image style={styles.image} source={{ uri: feeds.image }} />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {feeds.bed} bed {feeds.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {feeds.type}. {feeds.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>${feeds.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarousel;
