import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import CameraIcon from "./graphics/CameraIcon";

import { colors, spacing } from "../../styling";
const { successLight, successDark } = colors;
const { spaceBetween_TagIconText } = spacing;

const Caption = ({ isEditable, textValue, setTextValue }) => {
  return (
    <View style={styles.container}>
      <CameraIcon />
      <View style={{ width: spaceBetween_TagIconText }} />
      {!isEditable && <Text style={styles.text}>{textValue}</Text>}
      {isEditable && (
        <TextInput
          style={styles.text}
          placeholderTextColor={successDark}
          placeholder="Caption..."
          value={textValue}
          onChangeText={(t) => setTextValue(t)}
        ></TextInput>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: successLight,
    borderColor: successDark,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  spaceBetween: {
    width: 3,
  },
  text: {
    color: successDark,
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
});

export default Caption;
