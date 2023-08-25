import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styling";
import PlusIcon from "./graphics/PlusIcon";

const OtherTag = ({ content, contentContainerStyle }) => {
  return (
    <View style={[styles.containerBase, contentContainerStyle]}>
      <PlusIcon />
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
    backgroundColor: colors.primary.bg,
    borderColor: colors.primary.bg,
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

export default OtherTag;
