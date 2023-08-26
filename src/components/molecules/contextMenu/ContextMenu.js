import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ColoredCircle from "../../atoms/graphics/ColoredCircle";
import { colors } from "../../../styling";

const DEFAULT_ITEMS = [
  { category: "green", text: "Healthy" },
  { category: "yellow", text: "Ok" },
  { category: "red", text: "Unhealthy" },
];

const SPAWN_OFFSET = {
  x: 20,
  y: 30,
};

export default ContextMenu = ({ tapLocation, items, onPressItem }) => {
  return (
    <View
      style={[
        styles.container,
        {
          top: tapLocation.y + SPAWN_OFFSET.y,
          left: tapLocation.x,
        },
      ]}
    >
      <Text>ContextMenu</Text>
      {DEFAULT_ITEMS.map((item, index) => {
        return (
          <MenuRow
            item={item}
            key={index}
            index={index}
            length={DEFAULT_ITEMS.length}
            onPressItem={onPressItem}
          />
        );
      })}
    </View>
  );
};

const MenuRow = ({ item, index, length, onPressItem }) => {
  const getContainerStyle = () => {
    switch (index) {
      case 0:
        return styles.firstMenuRow;
      case length - 1:
        return styles.lastMenuRow;
      default:
        return styles.middleMenuRow;
    }
  };
  return (
    <Pressable
      style={[styles.menuRow, getContainerStyle()]}
      onPress={() => onPressItem(item.category)}
    >
      <ColoredCircle category={item.category} />
      <View style={{ width: 5 }} />
      <Text style={styles.text}>{item.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.primary.bg,
    borderColor: colors.primary.dark,
  },
  firstMenuRow: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
  },
  lastMenuRow: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  middleMenuRow: {
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 13,
    fontFamily: "Inter-Medium",
    color: colors.primary.dark,
  },
});
