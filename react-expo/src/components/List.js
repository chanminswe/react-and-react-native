import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ListControl from "./ListControl";

export default function List({ data, onSort, onFilter, asc }) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<ListControl {...{ onFilter, onSort, asc }} />}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    color: "blue",
    fontSize: "5",
    fontWeight: "bold",
  },
});
