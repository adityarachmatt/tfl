import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BottomTabBar from "../components/molecules/BottomTabBar";

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
  const getPage = () => {
    return (
      <>
        {selectedPage === TAB_KEYS.HOME && <ViewPage />}
        {selectedPage === TAB_KEYS.MEDICAL && <MedicalPage />}
        {selectedPage === TAB_KEYS.DATA && <DataPage />}
        {selectedPage === TAB_KEYS.PROFILE && <ProfilePage />}
      </>
    );
  };
  return (
    <View style={styles.container}>
      {getPage()}
      <View style={styles.tabBar}>
        <BottomTabBar
          selectedPage={selectedPage}
          handleTabPress={handleTabPress}
          addSelected={addSelected}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  tabBar: {
    position: "absolute",
    bottom: 0,
  },
});
