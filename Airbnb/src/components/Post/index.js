import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const Post = ({ feeds }) => {
  // console.log(feeds);

  const navigation = useNavigation();
  const gotToPage = () => {
    navigation.navigate("Post", { feedId: feeds.id });
  };

  return (
    <Pressable style={styles.container} onPress={gotToPage}>
      {/* image */}
      <Image style={styles.img} source={{ uri: feeds.image }} />
      {/* bedroom */}
      <Text style={styles.bedroom}>
        {feeds.bed} bed {feeds.bedroom} bedroom
      </Text>
      {/* description */}
      <Text style={styles.description}>
        {feeds.type} &#8226; {feeds.title}
      </Text>
      {/* old/new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${feeds.oldPrice}</Text>
        <Text style={styles.newPrice}> ${feeds.newPrice}</Text>/ night
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}> ${feeds.totalPrice}</Text>
    </Pressable>
  );
};

export default Post;
