import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./../styles";

const PostCarousel = ({ feeds }) => {
  // console.log(feeds);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default PostCarousel;
