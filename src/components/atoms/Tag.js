import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styling";

const Tag = ({ content, category, selected, contentContainerStyle }) => {
  const getStyle = (category) => {
    switch (category) {
      case "green":
        return styles.green;
      case "yellow":
        return styles.yellow;
      case "red":
        return styles.red;
    }
  };
  return (
    <View
      style={[
        styles.containerBase,
        selected ? styles.selectedContainer : styles.unselectedContainer,
        contentContainerStyle,
      ]}
    >
      <View style={[styles.categoryBase, getStyle(category)]} />
      <View style={styles.middleSpacing} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectedContainer: {
    backgroundColor: colors.primary.light,
    borderColor: colors.primary.light,
  },
  unselectedContainer: {
    borderWidth: 1,
    borderColor: colors.primary.dark,
  },
  categoryBase: {
    height: 12,
    width: 12,
    borderRadius: 100,
  },
  green: {
    backgroundColor: colors.success.default,
  },
  yellow: {
    backgroundColor: colors.warning.default,
  },
  red: {
    backgroundColor: colors.error.default,
  },
  middleSpacing: {
    width: 5,
  },
  content: {
    fontSize: 13,
    fontFamily: "Inter-Medium",
    color: colors.primary.dark,
  },
});

export default Tag;
