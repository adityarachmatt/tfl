import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalHeader from "../../components/molecules/modalHeader";
import ModalCard from "../../components/organisms/modalCard";
import ContextMenu from "../../components/molecules/contextMenu/ContextMenu";

/* CONSTANTS; TO BE FETCHED FROM FIREBASE */
const TAG_DATA1 = {
  1: { content: "Mie Goreng", category: "yellow", selected: false },
  2: { content: "Koko Crunch", category: "red", selected: false },
  3: { content: "Bacang", category: "green", selected: false },
  4: { content: "Broccoli", category: "green", selected: false },
  5: { content: "Avocado", category: "green", selected: false },
};

const TAG_DATA2 = {
  1: { content: "hello", category: "green", selected: false },
};

const TAG_DATA3 = {
  1: { content: "hello", category: "green", selected: false },
  2: { content: "hello", category: "yellow", selected: false },
  3: { content: "hello", category: "red", selected: true },
  4: { content: "hello", category: "green", selected: true },
  5: { content: "hello", category: "yellow", selected: true },
  6: { content: "hello", category: "red", selected: true },
};

const TITLES = {
  CARD1: "Sarapan",
  CARD2: "Makan Siang",
  CARD3: "Makan Malam",
};

const AddJurnalModule = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  // Tags List
  const [tagData1, setTagData1] = useState(TAG_DATA2);
  const [tagData2, setTagData2] = useState(TAG_DATA2);
  const [tagData3, setTagData3] = useState(TAG_DATA3);
  // Tags List > Choose Category Menu
  const [menuVisible, setMenuVisible] = useState(false);
  const [tapLocation, setTapLocation] = useState({ x: 200, y: 200 });
  const [otherTagCategory, setOtherTagCategory] = useState("green");
  const handleOpenMenu = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    console.log(`pageX: ${pageX} \t pageY: ${pageY}`);
    setTapLocation({ x: pageX, y: pageY });
    setMenuVisible(true);
  };
  const handleCloseMenu = () => {
    setMenuVisible(false);
  };
  const onPressItem = (category) => {
    setOtherTagCategory(category);
    handleCloseMenu();
    console.log(`selected ${category}`);
  };

  return (
    <View style={styles.container}>
      <ModalHeader
        title="Aktivitas"
        onPressHapusTags={() => console.log("pressed hapus tags")} // TODO
        onPressExit={() => console.log("pressed exit")} // TODO
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.cardScroll}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        extraHeight={200}
        onScroll={handleCloseMenu}
      >
        <ModalCard
          title={TITLES.CARD1}
          image={image1}
          setImage={setImage1}
          tagData={tagData1}
          setTagData={setTagData1}
          otherTagCategory={otherTagCategory}
          menuVisible={menuVisible}
          handleOpenMenu={handleOpenMenu}
          onPressItem={onPressItem}
        />
        <View style={styles.cardMargin} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddJurnalModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardScroll: {
    alignItems: "center",
    marginVertical: 20,
  },
  cardMargin: {
    height: 40,
  },
});
