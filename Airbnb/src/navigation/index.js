import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import DestinationScreen from "../screens/DestinationScreen";
import GuestScreen from "../screens/Guest";
import HomeTabNavigator from "./HomeTabNavigator";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
