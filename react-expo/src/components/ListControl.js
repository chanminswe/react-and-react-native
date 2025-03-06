import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListFilter from "./ListFilter";
import ListSort from "./ListSort";

export default function ListControl({ onSort, onFilter, asc }) {
  return (
    <View style={styles.control}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
