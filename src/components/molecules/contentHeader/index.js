import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

// 1. Logic
import { convertDate } from "./contentHeader-logic";

// 2. Graphics
import CalendarIcon from "./graphics/CalendarIcon";
import EditButtonImage from "./graphics/EditButtonImage";

// 3. Components
// N/A

// 4. Styles
import { colors, spacing } from "../../../styling";
const { primaryDark, primaryLight } = colors;
const { windowWidth, componentWidth, spaceBetween_TagIconText } = spacing;

const ContentHeader = ({ date, openEditModal }) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.subContainer}>
        <Date date={date} />
        <EditButton openEditModal={openEditModal} date={date} />
      </View>
    </View>
  );
};

const Date = ({ date }) => {
  return (
    <View style={styles.dateContainer}>
      <CalendarIcon />
      <View style={{ width: spaceBetween_TagIconText }} />
      <Text style={styles.dateText}>{convertDate(date)}</Text>
    </View>
  );
};

const EditButton = ({ openEditModal, date }) => {
  return (
    <Pressable onPress={() => openEditModal(date)}>
      <EditButtonImage />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "lightgray",
    borderWidth: 1,
    width: windowWidth,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: componentWidth,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 45,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: primaryLight,
    borderColor: primaryDark,
  },
  dateText: {
    fontSize: 18,
    color: primaryDark,
    fontFamily: "Inter-Medium",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default ContentHeader;
