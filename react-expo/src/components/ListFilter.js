import { View, Text , StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-web";

export default function ListFilter({ onFilter }) {
  return (
    <View>
      <TextInput
      onChangeText={onFilter}
      placeholder="entersomething" style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
