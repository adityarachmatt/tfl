import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../styling";
import ColoredCircle from "./graphics/ColoredCircle";

const Tag = ({
  content,
  category,
  selected,
  onPress,
  contentContainerStyle,
}) => {
  return (
    <Pressable
      style={[
        styles.containerBase,
        selected ? styles.selectedContainer : styles.unselectedContainer,
        contentContainerStyle,
      ]}
      onPress={onPress}
    >
      <ColoredCircle category={category} />
      <View style={styles.middleSpacing} />
      <Text style={styles.content}>{content}</Text>
    </Pressable>
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
    borderWidth: 1,
  },
  selectedContainer: {
    backgroundColor: colors.primary.light,
    borderColor: colors.primary.light,
  },
  unselectedContainer: {
    borderColor: colors.primary.dark,
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
