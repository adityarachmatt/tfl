import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import AltImage from "./graphics/AltImage";
import HeartToggle from "../../atoms/HeartToggle";
import ExitIcon from "../../atoms/graphics/ExitIcon";
import ImageView from "../imageView";
import { componentHorizontalMargins } from "../../../styling/spacing";

export default EditBukuImageView = ({ image, setImage }) => {
  const [heartSelected, setHeartSelected] = useState(false);
  const pressHeart = () => {
    //TODO FIREBASE
    setHeartSelected((prevState) => !prevState);
    console.log("Pressed Heart");
  };
  const pressExit = () => {
    console.log("Pressed Exit");
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
      <Pressable style={styles.lockContainer} onPress={pressExit}>
        <ExitIcon />
      </Pressable>
    </View>
  );
};

const WINDOW_WIDTH = Dimensions.get("window").width;

const DIMENSIONS = {
  PADDING: componentHorizontalMargins,
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
    top: DIMENSIONS.PADDING + 20,
    left: DIMENSIONS.PADDING,
  },
  lockContainer: {
    position: "absolute",
    top: DIMENSIONS.PADDING + 20,
    right: DIMENSIONS.PADDING,
  },
});
