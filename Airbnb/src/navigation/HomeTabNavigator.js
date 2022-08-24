import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
      }}
    >
      <Tab.Screen
        name={"Explore"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Saved"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Airbnb"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Messages"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Profle"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
