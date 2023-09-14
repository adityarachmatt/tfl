import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../styling";
import ColoredCircle from "./graphics/ColoredCircle";
import MinusIcon from "./graphics/MinusIcon";

const Tag = ({
  content,
  category,
  selected,
  onPress,
  contentContainerStyle,
  isDeleting,
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
      {(isDeleting && <MinusIcon />) || <ColoredCircle category={category} />}
      <View style={styles.middleSpacing} />
      <Text style={styles.content}>{content}</Text>
    </Pressable>
  );
};

// Manual height calculation so that it doesn't expand when the ContextMenu is opened (OtherTag>onPress)
const BORDER_WIDTH = 1;
const PADDING_VERTICAL = 8;
const FONT_SIZE = 13;
const HEIGHT = BORDER_WIDTH * 2 + PADDING_VERTICAL * 2 + FONT_SIZE + 3;

const styles = StyleSheet.create({
  containerBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 12,
    height: HEIGHT,
    borderWidth: BORDER_WIDTH,
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
    fontSize: FONT_SIZE,
    fontFamily: "Inter-Medium",
    color: colors.primary.dark,
  },
});

export default Tag;
