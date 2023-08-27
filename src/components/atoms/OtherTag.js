import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import { colors } from "../../styling";
import ChevronDownIcon from "./graphics/ChevronDownIcon";

const OtherTag = ({
  setData,
  contentContainerStyle,
  otherTagCategory,
  handleOpenMenu,
}) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("green");

  useEffect(() => {
    setCategory(otherTagCategory);
  }, [otherTagCategory]);
  const handleSubmit = (content) => {
    setData((data) => ({
      ...data,
      [content]: { content, category, selected: true },
    }));
    setContent("");
  };
  const handleTextChange = (content) => {
    setContent(content);
  };

  return (
    <View style={[styles.containerBase, contentContainerStyle]}>
      <Pressable style={styles.categoryPicker} onPress={handleOpenMenu}>
        <ColoredCircle category={category} />
        <View style={{ width: 5 }} />
        <ChevronDownIcon />
      </Pressable>
      <View style={styles.middleSpacing} />
      <TextInput
        style={styles.content}
        placeholder={"Lainnya"}
        placeholderTextColor={colors.primary.dark}
        onSubmitEditing={(value) => handleSubmit(value.nativeEvent.text)}
        value={content}
        onChangeText={handleTextChange}
      ></TextInput>
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
    borderWidth: 1,
  },
  middleSpacing: {
    width: 5,
  },
  content: {
    fontSize: 13,
    fontFamily: "Inter-Medium",
    color: colors.primary.default,
  },
  categoryPicker: {
    flexDirection: "row",
  },
});

export default OtherTag;
