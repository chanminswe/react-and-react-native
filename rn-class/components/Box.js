import { View, Text , StyleSheet } from "react-native";
import React from "react";

const Box = ({children}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    margin: 10,
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
