import React, { useState } from "react";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";

// 1. Logic
// NA, controlled by higher component

// 2. Graphics
import BukuUnselected from "./graphics/BukuUnselected";
import EmosiUnselected from "./graphics/EmosiUnselected";
import MakanUnselected from "./graphics/MakanUnselected";
import AktivitasUnselected from "./graphics/AktivitasUnselected";
import BukuSelected from "./graphics/BukuSelected";
import EmosiSelected from "./graphics/EmosiSelected";
import MakanSelected from "./graphics/MakanSelected";
import AktivitasSelected from "./graphics/AktivitasSelected";
import CalendarSelected from "./graphics/CalendarSelected";
import CalendarUnselected from "./graphics/CalendarUnselected";

// 3. Global Components
// NA

// 4. Global Styles
import { spacing } from "../../../styling";
const { windowWidth, componentWidth } = spacing;

const Header = ({
  calendarShown,
  setCalendarShown,
  selectedPage,
  setSelectedPage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <CalendarButton
          calendarShown={calendarShown}
          setCalendarShown={setCalendarShown}
        />
        <NavigationButtonGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </View>
    </View>
  );
};

const CalendarButton = ({ calendarShown, setCalendarShown }) => {
  return (
    <SelectableButton
      onPress={() => setCalendarShown((prevState) => !prevState)}
      isSelected={calendarShown}
      selectedAppearance={<CalendarSelected />}
      unselectedAppearance={<CalendarUnselected />}
    />
  );
};

const NavigationButtonGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <View style={styles.navigationButtonGroup}>
      <SelectableButton
        onPress={() => setSelectedPage("buku")}
        isSelected={selectedPage == "buku"}
        selectedAppearance={<BukuSelected />}
        unselectedAppearance={<BukuUnselected />}
      />
      <SelectableButton
        onPress={() => setSelectedPage("emosi")}
        isSelected={selectedPage == "emosi"}
        selectedAppearance={<EmosiSelected />}
        unselectedAppearance={<EmosiUnselected />}
      />
      <SelectableButton
        onPress={() => setSelectedPage("makan")}
        isSelected={selectedPage == "makan"}
        selectedAppearance={<MakanSelected />}
        unselectedAppearance={<MakanUnselected />}
      />
      <SelectableButton
        onPress={() => setSelectedPage("aktivitas")}
        isSelected={selectedPage == "aktivitas"}
        selectedAppearance={<AktivitasSelected />}
        unselectedAppearance={<AktivitasUnselected />}
      />
    </View>
  );
};

const SelectableButton = ({
  onPress,
  isSelected,
  selectedAppearance,
  unselectedAppearance,
}) => {
  return (
    <Pressable onPress={onPress}>
      {isSelected ? selectedAppearance : unselectedAppearance}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // Need to set flexDirection to row so that flexBasis can expand to fill the whole space horizontally?
  container: {
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowColor: "black",
  },
  rowContainer: {
    width: componentWidth,
    paddingVertical: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navigationButtonGroup: {
    flexDirection: "row",
  },
});

export default Header;
