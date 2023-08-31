import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import DefaultImage from "./graphics/DefaultImage";
import * as ImagePicker from "expo-image-picker";
import { componentBorderRadius } from "../../../styling/spacing";
import { width, aspectRatio } from "./sharedLocalStyles/spacing";

const ImageViewViewOnly = ({ image }) => {
  return (
    <View>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <DefaultImage />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: (1 / aspectRatio) * width,
    backgroundColor: "black",
    borderRadius: componentBorderRadius,
  },
});

export default ImageViewViewOnly;
