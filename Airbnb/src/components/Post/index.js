import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const Post = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.img}
        source={{
          uri: "https://imageio.forbes.com/blogs-images/keithflamer/files/2016/03/The-Royal-Villa-At-Grand-Resort-Lagonissi-1.png?format=png&width=1200",
        }}
      />
      {/* bedroom */}
      <Text style={styles.bedroom}>1 bed 1 bedroom</Text>
      {/* description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, in
        itaque explicabo veniam doloribus, est debitis exercitationem voluptatum
        magni qui, vero nisi odit. Nulla saepe numquam magni, delectus quo
        recusandae?
      </Text>
      {/* old/new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$45</Text>
        <Text style={styles.newPrice}> $35</Text>/ night
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}> $35</Text>
    </View>
  );
};

export default Post;
