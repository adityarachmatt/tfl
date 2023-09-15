import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";

// TAB ICONS
import AddFilledIcon from "../components/atoms/graphics/bottomTabBar/AddFilledIcon";
import AddOutlineIcon from "../components/atoms/graphics/bottomTabBar/AddOutlineIcon";
import DataFilledIcon from "../components/atoms/graphics/bottomTabBar/DataFilledIcon";
import DataOutlineIcon from "../components/atoms/graphics/bottomTabBar/DataOutlineIcon";
import HomeFilledIcon from "../components/atoms/graphics/bottomTabBar/HomeFilledIcon";
import HomeOutlineIcon from "../components/atoms/graphics/bottomTabBar/HomeOutlineIcon";
import MedicalFilledIcon from "../components/atoms/graphics/bottomTabBar/MedicalFilledIcon";
import MedicalOutlineIcon from "../components/atoms/graphics/bottomTabBar/MedicalOutlineIcon";
import ProfileFilledIcon from "../components/atoms/graphics/bottomTabBar/ProfileFilledIcon";
import ProfileOutlineIcon from "../components/atoms/graphics/bottomTabBar/ProfileOutlineIcon";

// ADD
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const TAB_KEYS = {
  HOME: "Home",
  MEDICAL: "Medical",
  ADD: "Add",
  DATA: "Data",
  PROFILE: "Profile",
};

const ADD_KEYS = {
  BUKU: "Buku",
  EMOSI: "Emosi",
  MAKAN: "Makan",
  AKTIVITAS: "Aktivitas",
};

const Tab = createBottomTabNavigator();

export default LandingPage = () => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const { HOME, MEDICAL, ADD, DATA, PROFILE } = TAB_KEYS;
  const getAddIcon = () =>
    showAddMenu ? <AddFilledIcon /> : <AddOutlineIcon />;
  const getIcon = (name, focused) => {
    if (focused) {
      switch (name) {
        case HOME:
          return <HomeFilledIcon />;
        case MEDICAL:
          return <MedicalFilledIcon />;
        case ADD:
          return getAddIcon();
        case DATA:
          return <DataFilledIcon />;
        case PROFILE:
          return <ProfileFilledIcon />;
        default:
          console.log("not working");
          // console.log(
          //   `[e]LandingPage/getIcon/Focused | \tname:${JSON.stringify(
          //     name
          //   )} | \t${JSON.stringify(focused)}`
          // );
          return;
      }
    }
    switch (name) {
      case HOME:
        return <HomeOutlineIcon />;
      case MEDICAL:
        return <MedicalOutlineIcon />;
      case ADD:
        return getAddIcon();
      case DATA:
        return <DataOutlineIcon />;
      case PROFILE:
        return <ProfileOutlineIcon />;
      default:
        console.log("not working");
        // console.log(
        //   `[e]LandingPage/getIcon/Blur | \tname:${JSON.stringify(
        //     name
        //   )} | \t${JSON.stringify(focused)}`
        // );
        return;
    }
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return getIcon(route.name, focused);
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name={HOME}
          component={ViewPage}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={MEDICAL} component={MedicalPage} />
        <Tab.Screen name={ADD} component={MedicalPage} />
        <Tab.Screen name={DATA} component={DataPage} />
        <Tab.Screen name={PROFILE} component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const AddMenu = ({ handleAddPress }) => {
  const { BUKU, EMOSI, MAKAN, AKTIVITAS } = ADD_KEYS;
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
      case ADD_KEYS.BUKU:
        return <Buku />;
      case ADD_KEYS.EMOSI:
        return <Emosi />;
      case ADD_KEYS.MAKAN:
        return <Makan />;
      case ADD_KEYS.AKTIVITAS:
        return <Aktivitas />;
      default:
        console.log("[e]LandingPage>AddRow>GetIcon");
        return;
    }
  };
  const getAdditionalStyle = () => {
    switch (item) {
      case ADD_KEYS.BUKU:
        return styles.addTopRow;
      case ADD_KEYS.AKTIVITAS:
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
