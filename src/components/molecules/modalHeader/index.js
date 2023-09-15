import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import HapusTags from "./graphics/HapusTags";
import Exit from "./graphics/Exit";
import Selesai from "./graphics/Selesai";
import { spacing } from "../../../styling";

const ModalHeader = ({ title, onPressHapusTags, onPressExit, isDeleting }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={onPressHapusTags}>
          {(isDeleting && <Selesai />) || <HapusTags />}
        </Pressable>
      </View>
      <Pressable onPress={onPressExit}>
        <Exit />
      </Pressable>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    paddingHorizontal: spacing.componentHorizontalMargins,
    paddingBottom: spacing.componentHorizontalMargins,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    height: 55,
  },
});
