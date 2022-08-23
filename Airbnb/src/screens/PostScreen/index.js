import { View, FlatList } from "react-native";
import React from "react";
import Post from "../../components/Post";
import feed from "../../../assets/data/feed";

const PostScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({ item }) => <Post feeds={item} />} />
    </View>
  );
};

export default PostScreen;
