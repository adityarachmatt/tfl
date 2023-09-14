import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import DefaultImage from "./graphics/DefaultImage";
import * as ImagePicker from "expo-image-picker";
import { componentBorderRadius } from "../../../styling/spacing";
import { width, aspectRatio } from "./sharedLocalStyles/spacing";

// pass altImage through children
const ImageView = ({
  image,
  setImage,
  width,
  height,
  borderRadii,
  children,
}) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Pressable onPress={pickImageAsync}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.getImage(width, height, borderRadii)}
        />
      ) : (
        children || <DefaultImage />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  getImage(propWidth, propHeight, propBorderRadii) {
    if (!propWidth || !propHeight) {
      return {
        width: width,
        height: (1 / aspectRatio) * width,
        backgroundColor: "black",
        borderRadius: componentBorderRadius,
      };
    }
    let returnVal = {
      width: propWidth,
      height: propHeight,
      backgroundColor: "black",
    };
    if (propBorderRadii) {
      returnVal = {
        ...returnVal,
        borderTopLeftRadius: propBorderRadii.TOP_LEFT,
        borderTopRightRadius: propBorderRadii.TOP_RIGHT,
        borderBottomLeftRadius: propBorderRadii.BOTTOM_LEFT,
        borderBottomRightRadius: propBorderRadii.BOTTOM_RIGHT,
      };
    }
    return returnVal;
  },
});

export default ImageView;
