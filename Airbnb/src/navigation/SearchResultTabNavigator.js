import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PostScreen from "../screens/PostScreen";
const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "red",
        indicatorStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Tab.Screen name="List" component={PostScreen} />
      <Tab.Screen name="Maps" component={PostScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;
