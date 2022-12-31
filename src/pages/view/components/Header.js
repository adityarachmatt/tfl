import React, { useState } from "react";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";

// Import navigation buttons
// unselected:
import BukuUnselected from "./graphics/Header/BukuUnselected";
import EmosiUnselected from "./graphics/Header/EmosiUnselected";
import MakanUnselected from "./graphics/Header/MakanUnselected";
import AktivitasUnselected from "./graphics/Header/AktivitasUnselected";
// selected:
import BukuSelected from "./graphics/Header/BukuSelected";
import EmosiSelected from "./graphics/Header/EmosiSelected";
import MakanSelected from "./graphics/Header/MakanSelected";
import AktivitasSelected from "./graphics/Header/AktivitasSelected";

// Import calendar button
import CalendarSelected from "./graphics/Header/CalendarSelected";
import CalendarUnselected from "./graphics/Header/CalendarUnselected";

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

const windowWidth = Dimensions.get("window").width;
const componentWidth = windowWidth * 0.85;

const styles = StyleSheet.create({
  // Need to set flexDirection to row so that flexBasis can expand to fill the whole space horizontally?
  container: {
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "center",
    borderBottomWidth: 1, // TODO: replace with shadow!
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
