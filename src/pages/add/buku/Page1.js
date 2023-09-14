import { useState } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import ImageView from "../../../components/molecules/imageView";

const DEFAULT_IMAGE = require("../../../../assets/default-image-bg.png");

const DIMENSIONS = {
  WIDTH: Dimensions.get("window").width,
  HEIGHT: Dimensions.get("window").height,
};

export default Page1 = ({ image, setImage }) => {
  return (
    <ImageView
      image={image}
      setImage={setImage}
      width={DIMENSIONS.WIDTH}
      height={DIMENSIONS.HEIGHT}
    >
      <Image source={DEFAULT_IMAGE} style={styles.image} />
    </ImageView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: DIMENSIONS.HEIGHT,
    width: DIMENSIONS.WIDTH,
    position: "absolute",
  },
});
