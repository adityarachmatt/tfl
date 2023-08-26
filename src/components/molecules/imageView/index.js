import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import DefaultImage from "./graphics/DefaultImage";
import * as ImagePicker from "expo-image-picker";
import { componentBorderRadius } from "../../../styling/spacing";
import { width, aspectRatio } from "./sharedLocalStyles/spacing";

const ImageView = ({ image, setImage }) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Pressable onPress={pickImageAsync}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <DefaultImage />
      )}
    </Pressable>
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

export default ImageView;
