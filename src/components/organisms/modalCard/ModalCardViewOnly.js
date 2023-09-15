import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../styling";
import ImageView from "../../molecules/imageView";
import TagListViewOnly from "../../molecules/tagList/TagListViewOnly";
import ImageViewViewOnly from "../../molecules/imageView/ImageViewViewOnly";

const DIMENSIONS = {
  WIDTH: Dimensions.get("window").width * 0.95,
};

const ModalCardViewOnly = ({ title, image, tagData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ImageViewViewOnly image={image} />
      <TagListViewOnly data={tagData} />
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
    fontWeight: "bold",
    padding: 12,
  },
});

export default ModalCardViewOnly;
