import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../styling";
import DefaultImage from "./graphics/DefaultImage";
import TagList from "../../molecules/tagList";

const DIMENSIONS = {
  WIDTH: Dimensions.get("window").width * 0.95,
};

const MOCK_TAG_DATA = {
  1: { content: "hello", category: "green", selected: false },
  2: { content: "hello", category: "yellow", selected: false },
  3: { content: "hello", category: "red", selected: false },
  4: { content: "hello", category: "green", selected: true },
  5: { content: "hello", category: "yellow", selected: true },
  6: { content: "hello", category: "red", selected: true },
};

const ModalCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <DefaultImage />
      <TagList data={MOCK_TAG_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    padding: 12,
  },
});

export default ModalCard;
