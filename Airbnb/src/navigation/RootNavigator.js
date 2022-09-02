import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationScreen from "../screens/DestinationScreen";
import GuestScreen from "../screens/Guest";
import HomeTabNavigator from "./HomeTabNavigator";
import DetailedPostScreen from "../screens/DetailedPostScreen";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"HomeTabNavigator"}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"DestinationScreen"}
          component={DestinationScreen}
          options={{ title: "How many people?" }}
        />

        <Stack.Screen
          name={"GuestScreen"}
          component={GuestScreen}
          options={{ title: "How many people?" }}
        />

        <Stack.Screen
          name={"Post"}
          component={DetailedPostScreen}
          options={{ title: "Accomodation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
