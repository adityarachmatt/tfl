import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";

// ADD
import BottomTabBar from "../components/molecules/BottomTabBar";
import Buku from "../components/atoms/graphics/addMenu/Buku";
import Emosi from "../components/atoms/graphics/addMenu/Emosi";
import Makan from "../components/atoms/graphics/addMenu/Makan";
import Aktivitas from "../components/atoms/graphics/addMenu/Aktivitas";
import { colors } from "../styling";

// PAGES
import ViewPage from "./view/ViewPage";

import MedicalPage from "./medical/MedicalPage";

import AddBukuSequence from "./add/buku";
import AddEmosiPage from "./add/AddEmosiPage";
import AddJurnalAktivitasPage from "./add/AddJurnalAktivitasPage";
import AddJurnalMakanPage from "./add/AddJurnalMakanPage";
import EditBukuModal from "./edit/EditBukuModal";

import DataPage from "./data/DataPage";
import ProfilePage from "./profile/ProfilePage";

const TAB_KEYS = {
  HOME: "Home",
  MEDICAL: "Medical",
  ADD: "Add",
  DATA: "Data",
  PROFILE: "Profile",
};

const ADD_OPTIONS = {
  BUKU: "Buku",
  EMOSI: "Emosi",
  MAKAN: "Makan",
  AKTIVITAS: "Aktivitas",
};

export default LandingPage = () => {
  // TAB BAR
  const [selectedPage, setSelectedPage] = useState(TAB_KEYS.HOME);
  const [addSelected, setAddSelected] = useState(false);
  const handleTabPress = (key) => {
    switch (key) {
      case TAB_KEYS.HOME:
        setSelectedPage(TAB_KEYS.HOME);
        return;
      case TAB_KEYS.MEDICAL:
        setSelectedPage(TAB_KEYS.MEDICAL);
        return;
      case TAB_KEYS.DATA:
        setSelectedPage(TAB_KEYS.DATA);
        return;
      case TAB_KEYS.PROFILE:
        setSelectedPage(TAB_KEYS.PROFILE);
        return;
      case TAB_KEYS.ADD:
        setAddSelected((a) => !a);
        return;
      default:
        console.log("[e] pages/LandingPage>handleTabPress: invalid tab_key");
        return;
    }
  };
  const handleAddPress = (key) => {
    switch (key) {
      case ADD_OPTIONS.BUKU:
        setSelectedPage(ADD_OPTIONS.BUKU);
        return;
      case ADD_OPTIONS.EMOSI:
        setSelectedPage(ADD_OPTIONS.EMOSI);
        return;
      case ADD_OPTIONS.MAKAN:
        setSelectedPage(ADD_OPTIONS.MAKAN);
        return;
      case ADD_OPTIONS.AKTIVITAS:
        setSelectedPage(ADD_OPTIONS.AKTIVITAS);
        return;
      default:
        console.log("[e]LandingPage>handleAddPress");
        return;
    }
  };
  const getPage = () => {
    return (
      <>
        {selectedPage === TAB_KEYS.HOME && <ViewPage />}
        {selectedPage === TAB_KEYS.MEDICAL && <MedicalPage />}
        {selectedPage === TAB_KEYS.DATA && <DataPage />}
        {selectedPage === TAB_KEYS.PROFILE && <ProfilePage />}
        {selectedPage === ADD_OPTIONS.BUKU && <AddBukuSequence />}
        {selectedPage === ADD_OPTIONS.EMOSI && <AddEmosiPage />}
        {selectedPage === ADD_OPTIONS.MAKAN && <AddJurnalMakanPage />}
        {selectedPage === ADD_OPTIONS.AKTIVITAS && <AddJurnalAktivitasPage />}
      </>
    );
  };
  return (
    <View style={styles.container}>
      {getPage()}
      {addSelected && (
        <View style={styles.addMenuContainer}>
          <AddMenu handleAddPress={handleAddPress} />
        </View>
      )}
      <View style={styles.tabBarContainer}>
        <BottomTabBar
          selectedPage={selectedPage}
          handleTabPress={handleTabPress}
          addSelected={addSelected}
        />
      </View>
    </View>
  );
};

const AddMenu = ({ handleAddPress }) => {
  const { BUKU, EMOSI, MAKAN, AKTIVITAS } = ADD_OPTIONS;
  return (
    <View style={styles.addMenu}>
      <AddRow item={BUKU} handlePress={() => handleAddPress(BUKU)} />
      <AddRow item={EMOSI} handlePress={() => handleAddPress(EMOSI)} />
      <AddRow item={MAKAN} handlePress={() => handleAddPress(MAKAN)} />
      <AddRow item={AKTIVITAS} handlePress={() => handleAddPress(AKTIVITAS)} />
    </View>
  );
};

const AddRow = ({ item, handlePress }) => {
  const getIcon = () => {
    switch (item) {
      case ADD_OPTIONS.BUKU:
        return <Buku />;
      case ADD_OPTIONS.EMOSI:
        return <Emosi />;
      case ADD_OPTIONS.MAKAN:
        return <Makan />;
      case ADD_OPTIONS.AKTIVITAS:
        return <Aktivitas />;
      default:
        console.log("[e]LandingPage>AddRow>GetIcon");
        return;
    }
  };
  const getAdditionalStyle = () => {
    switch (item) {
      case ADD_OPTIONS.BUKU:
        return styles.addTopRow;
      case ADD_OPTIONS.AKTIVITAS:
        return styles.addBottomRow;
      default:
        return {};
    }
  };
  return (
    <Pressable
      style={[styles.addRow, getAdditionalStyle(), styles.addShadow]}
      onPress={handlePress}
    >
      <View style={styles.addIconContainer}>{getIcon()}</View>
      <Text style={styles.addText}>{item}</Text>
    </Pressable>
  );
};

const WINDOW_WIDTH = Dimensions.get("window").width;

const DIMENSIONS = {
  TAB_BAR_HEIGHT: WINDOW_WIDTH / 5 + 20,
  ADD_MENU: {
    WIDTH: 150,
    BOTTOM_MARGIN: 20,
    RIGHT_MARGIN: WINDOW_WIDTH / 2 - 75,
    ROW_HEIGHT: 50,
    BORDER_RADIUS: 10,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  addText: {
    fontWeight: "bold",
  },
  addIconContainer: {
    height: 28,
    width: 28,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  addTopRow: {
    borderTopLeftRadius: DIMENSIONS.ADD_MENU.BORDER_RADIUS,
    borderTopRightRadius: DIMENSIONS.ADD_MENU.BORDER_RADIUS,
  },
  addRow: {
    width: DIMENSIONS.ADD_MENU.WIDTH,
    height: DIMENSIONS.ADD_MENU.ROW_HEIGHT,
    backgroundColor: colors.grayscale.offWhite,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  addBottomRow: {
    borderBottomLeftRadius: DIMENSIONS.ADD_MENU.BORDER_RADIUS,
    borderBottomRightRadius: DIMENSIONS.ADD_MENU.BORDER_RADIUS,
    borderBottomWidth: 0,
  },
  addMenu: {
    width: DIMENSIONS.ADD_MENU.WIDTH,
  },
  addMenuContainer: {
    position: "absolute",
    bottom: DIMENSIONS.TAB_BAR_HEIGHT + DIMENSIONS.ADD_MENU.BOTTOM_MARGIN,
    right: DIMENSIONS.ADD_MENU.RIGHT_MARGIN,
  },
  addShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
  },
});
