import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
};

export default Settings;
