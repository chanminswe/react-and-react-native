import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Profile")}>
        Go to Profile
      </Button>
    </View>
  );
};

export default Home;
