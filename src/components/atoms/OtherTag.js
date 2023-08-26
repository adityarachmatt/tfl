import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { colors } from "../../styling";
import CategoryPicker from "./CategoryPicker";

const OtherTag = ({ setData, contentContainerStyle }) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("green");

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
      <CategoryPicker category={category} setCategory={setCategory} />
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
});

export default OtherTag;
