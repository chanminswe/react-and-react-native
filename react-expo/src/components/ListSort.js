import { View, Text } from "react-native";
import React from "react";

// const arrows = new Map([true, "▼"], [false, "▲"]);
const arrows = new Map([[true, "▼"], [false, "▲"]]);

export default function ListSort({ onSort, asc }) {
  return <Text onPress={onSort}>{arrows.get(asc)}</Text>;
}
