import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";

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

// NAVIGATION
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

// PLUGINS
import { BlurView } from "expo-blur";

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

// STYLING
const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const DIMENSIONS = {
  TAB_BAR: {
    HEIGHT: WINDOW_WIDTH / 5,
    WIDTH: WINDOW_WIDTH,
  },
  ADD_MENU_BUTTON: {
    BOTTOM_MARGIN: WINDOW_WIDTH / 5 - 36 - 11,
  },
  ADD_MENU: {
    WIDTH: 150,
    BOTTOM_MARGIN: 20,
    RIGHT_MARGIN: WINDOW_WIDTH / 2 - 75,
    ROW_HEIGHT: 50,
    BORDER_RADIUS: 10,
  },
};

const Tab = createBottomTabNavigator();

export default LandingPage = () => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const navigationRef = useNavigationContainerRef();
  const { HOME, MEDICAL, ADD, DATA, PROFILE } = TAB_KEYS;
  const { BUKU, EMOSI, MAKAN, AKTIVITAS } = ADD_KEYS;
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
  const handleAddPress = (key) => {
    navigationRef.navigate(key);
    setShowAddMenu(false);
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return getIcon(route.name, focused);
          },
          tabBarShowLabel: false,
          tabBarStyle: { height: DIMENSIONS.TAB_BAR.HEIGHT },
        })}
      >
        <Tab.Group>
          <Tab.Screen
            name={HOME}
            component={ViewPage}
            options={{ headerShown: false }}
          />
          <Tab.Screen name={MEDICAL} component={MedicalPage} />
          <Tab.Screen
            name={ADD}
            component={MedicalPage}
            options={{
              tabBarButton: (props) => (
                <Pressable
                  onPress={() => setShowAddMenu((s) => !s)}
                  style={styles.addMenuTabBarContainer}
                >
                  {getAddIcon()}
                </Pressable>
              ),
            }}
          />
          <Tab.Screen name={DATA} component={DataPage} />
          <Tab.Screen name={PROFILE} component={ProfilePage} />
        </Tab.Group>
        <Tab.Group
          screenOptions={{
            presentation: "modal",
            tabBarButton: (props) => <View />,
            headerShown: false,
          }}
        >
          <Tab.Screen name={BUKU} component={AddBukuSequence} />
          <Tab.Screen name={EMOSI} component={AddEmosiPage} />
          <Tab.Screen name={MAKAN} component={AddJurnalMakanPage} />
          <Tab.Screen name={AKTIVITAS} component={AddJurnalAktivitasPage} />
        </Tab.Group>
      </Tab.Navigator>
      {showAddMenu && (
        <>
          <BlurView
            intensity={8}
            style={{
              height: WINDOW_HEIGHT,
              width: WINDOW_WIDTH,
              position: "absolute",
            }}
          >
            <Pressable
              style={{ height: WINDOW_HEIGHT, width: WINDOW_WIDTH }}
              onPress={() => setShowAddMenu(false)}
            />
          </BlurView>
          <View style={styles.addMenuContainer}>
            <AddMenu handleAddPress={handleAddPress} />
          </View>
        </>
      )}
    </NavigationContainer>
  );
};

const AddMenu = ({ handleAddPress }) => {
  const { BUKU, EMOSI, MAKAN, AKTIVITAS } = ADD_KEYS;
  const DURATION = 300;
  const fadeAnim = useRef(new Animated.Value(0.8)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const yAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);
  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);
  useEffect(() => {
    Animated.timing(yAnim, {
      toValue: -100,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [yAnim]);
  return (
    <Animated.View
      style={[
        styles.addMenu,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: yAnim }],
        },
      ]}
    >
      <AddRow item={BUKU} handlePress={() => handleAddPress(BUKU)} />
      <AddRow item={EMOSI} handlePress={() => handleAddPress(EMOSI)} />
      <AddRow item={MAKAN} handlePress={() => handleAddPress(MAKAN)} />
      <AddRow item={AKTIVITAS} handlePress={() => handleAddPress(AKTIVITAS)} />
    </Animated.View>
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
      style={({ pressed }) => [
        styles.addRow,
        getAdditionalStyle(),
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          opacity: pressed ? 1 : 0.9,
        },
      ]}
      onPress={handlePress}
    >
      <View style={styles.addIconContainer}>{getIcon()}</View>
      <Text style={styles.addText}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  addMenuTabBarContainer: {
    height: DIMENSIONS.TAB_BAR.HEIGHT,
    width: DIMENSIONS.TAB_BAR.WIDTH / 5,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: DIMENSIONS.ADD_MENU_BUTTON.BOTTOM_MARGIN,
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
    // borderTopWidth: 1,
  },
  addRow: {
    width: DIMENSIONS.ADD_MENU.WIDTH,
    height: DIMENSIONS.ADD_MENU.ROW_HEIGHT,
    backgroundColor: colors.grayscale.offWhite,
    borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
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
    bottom: DIMENSIONS.TAB_BAR.HEIGHT + DIMENSIONS.ADD_MENU.BOTTOM_MARGIN - 100, // Corresponds with animation
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
