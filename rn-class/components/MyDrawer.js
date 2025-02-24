import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./ch-16/Home";
import Profile from "./ch-16/Profile";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
