import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SearchResultTabNavigator from "./SearchResultTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name={"SearchResultTabNavigator"}
        component={SearchResultTabNavigator}
        options={{ title: "Search your Destination" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
