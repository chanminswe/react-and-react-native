import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Home from "./components/ch-16/Home";
import Profile from "./components/ch-16/Profile";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
