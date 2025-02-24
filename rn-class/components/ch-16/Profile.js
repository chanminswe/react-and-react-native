import { View, Text , Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()}>Go back home</Button>
    </View>
  );
};

export default Profile;
