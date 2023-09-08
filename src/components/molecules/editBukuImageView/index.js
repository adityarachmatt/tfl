import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import AltImage from "./graphics/AltImage";
import HeartToggle from "../../atoms/HeartToggle";
import LockToggle from "../../atoms/LockToggle";
import ImageView from "../imageView";

export default EditBukuImageView = () => {
  const [heartSelected, setHeartSelected] = useState(false);
  const [lockSelected, setLockSelected] = useState(false);
  const [image, setImage] = useState("");
  const pressHeart = () => {
    //TODO FIREBASE
    setHeartSelected((prevState) => !prevState);
    console.log("Pressed Heart");
  };
  const pressLock = () => {
    //TODO FIREBASE
    setLockSelected((prevState) => !prevState);
    console.log("Pressed Lock");
  };
  return (
    <View>
      <View>
        <ImageView
          image={image}
          setImage={setImage}
          width={DIMENSIONS.WIDTH}
          height={DIMENSIONS.HEIGHT}
          borderRadii={BORDER_RADII}
        >
          <AltImage />
        </ImageView>
      </View>
      <View style={styles.heartContainer}>
        <HeartToggle isSelected={heartSelected} onPress={pressHeart} />
      </View>
      <View style={styles.lockContainer}>
        <LockToggle isSelected={lockSelected} onPress={pressLock} />
      </View>
    </View>
  );
};

const WINDOW_WIDTH = Dimensions.get("window").width;

const DIMENSIONS = {
  MARGIN: 20,
  WIDTH: WINDOW_WIDTH,
  HEIGHT: (WINDOW_WIDTH * 277) / 415,
};

const BORDER_RADII = {
  TOP_LEFT: 0,
  TOP_RIGHT: 0,
  BOTTOM_LEFT: 40,
  BOTTOM_RIGHT: 40,
};

const styles = StyleSheet.create({
  heartContainer: {
    position: "absolute",
    top: DIMENSIONS.MARGIN,
    left: DIMENSIONS.MARGIN,
  },
  lockContainer: {
    position: "absolute",
    top: DIMENSIONS.MARGIN,
    right: DIMENSIONS.MARGIN,
  },
});
