import { View, Text } from "react-native";
import React from "react";
import SearchResultMap from "../screens/SearchMap/SearchResultMap";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PostScreen from "../screens/PostScreen";
const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "red",
        indicatorStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Tab.Screen name="List" component={PostScreen} />
      <Tab.Screen name="Maps" component={SearchResultMap} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;
