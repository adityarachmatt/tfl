import { useState } from "react";
import { View, Dimensions, StyleSheet, Pressable } from "react-native";
import { grayscale } from "../../styling/colors";
import AddFilledIcon from "../atoms/graphics/bottomTabBar/AddFilledIcon";
import AddOutlineIcon from "../atoms/graphics/bottomTabBar/AddOutlineIcon";
import DataFilledIcon from "../atoms/graphics/bottomTabBar/DataFilledIcon";
import DataOutlineIcon from "../atoms/graphics/bottomTabBar/DataOutlineIcon";
import HomeFilledIcon from "../atoms/graphics/bottomTabBar/HomeFilledIcon";
import HomeOutlineIcon from "../atoms/graphics/bottomTabBar/HomeOutlineIcon";
import MedicalFilledIcon from "../atoms/graphics/bottomTabBar/MedicalFilledIcon";
import MedicalOutlineIcon from "../atoms/graphics/bottomTabBar/MedicalOutlineIcon";
import ProfileFilledIcon from "../atoms/graphics/bottomTabBar/ProfileFilledIcon";
import ProfileOutlineIcon from "../atoms/graphics/bottomTabBar/ProfileOutlineIcon";

const ICONS_DICTIONARY = {
  AddFilled: <AddFilledIcon />,
  AddOutline: <AddOutlineIcon />,
  DataFilled: <DataFilledIcon />,
  DataOutline: <DataOutlineIcon />,
  HomeFilled: <HomeFilledIcon />,
  HomeOutline: <HomeOutlineIcon />,
  MedicalFilled: <MedicalFilledIcon />,
  MedicalOutline: <MedicalOutlineIcon />,
  ProfileFilled: <ProfileFilledIcon />,
  ProfileOutline: <ProfileOutlineIcon />,
};

export default BottomTabBar = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  return (
    <View style={[styles.container, styles.shadow]}>
      <IconContainer
        filledKey="HomeFilled"
        outlineKey="HomeOutline"
        onPress={() => setSelectedPage("Home")}
        isFilled={selectedPage === "Home"}
      />
      <IconContainer
        filledKey="MedicalFilled"
        outlineKey="MedicalOutline"
        onPress={() => setSelectedPage("Medical")}
        isFilled={selectedPage === "Medical"}
      />
      <IconContainer
        filledKey="AddFilled"
        outlineKey="AddOutline"
        onPress={() => setSelectedPage("Add")}
        isFilled={selectedPage === "Add"}
      />
      <IconContainer
        filledKey="DataFilled"
        outlineKey="DataOutline"
        onPress={() => setSelectedPage("Data")}
        isFilled={selectedPage === "Data"}
      />
      <IconContainer
        filledKey="ProfileFilled"
        outlineKey="ProfileOutline"
        onPress={() => setSelectedPage("Profile")}
        isFilled={selectedPage === "Profile"}
      />
    </View>
  );
};

const IconContainer = ({ filledKey, outlineKey, onPress, isFilled }) => {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      {isFilled ? ICONS_DICTIONARY[filledKey] : ICONS_DICTIONARY[outlineKey]}
    </Pressable>
  );
};

const WINDOW_WIDTH = Dimensions.get("window").width;

const DIMENSIONS = {
  WIDTH: WINDOW_WIDTH,
  HEIGHT: WINDOW_WIDTH / 5,
  ICON_CONTAINER_WIDTH: WINDOW_WIDTH / 5,
};

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.WIDTH,
    height: DIMENSIONS.HEIGHT,
    backgroundColor: grayscale.offWhite,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  iconContainer: {
    width: DIMENSIONS.ICON_CONTAINER_WIDTH,
    height: DIMENSIONS.HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
