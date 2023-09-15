import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalHeader from "../../components/molecules/modalHeader";
import ModalCard from "../../components/organisms/modalCard";
import SubmitButton from "../../components/atoms/SubmitButton";
import ModalCardViewOnly from "../../components/organisms/modalCard/ModalCardViewOnly";

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
  const [isDeleting, setIsDeleting] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  // Tags List
  const [tagData1, setTagData1] = useState(TAG_DATA1);
  const [tagData2, setTagData2] = useState(TAG_DATA2);
  const [tagData3, setTagData3] = useState(TAG_DATA3);
  // Tags List > Choose Category Menu
  const [menuVisible1, setMenuVisible1] = useState(false);
  const [menuVisible2, setMenuVisible2] = useState(false);
  const [menuVisible3, setMenuVisible3] = useState(false);
  const [otherTagCategory, setOtherTagCategory] = useState("green");
  const handleOpenMenu1 = () => {
    setMenuVisible1(true);
  };
  const handleOpenMenu2 = () => {
    setMenuVisible2(true);
  };
  const handleOpenMenu3 = () => {
    setMenuVisible3(true);
  };
  const handleCloseMenu = () => {
    setMenuVisible1(false);
    setMenuVisible2(false);
    setMenuVisible3(false);
  };
  const onPressItem = (category) => {
    setOtherTagCategory(category);
    handleCloseMenu();
  };
  const onPressSubmit = () => {
    //FUNCTIONAL DEMONSTRATION CONSOLE.LOGS; DO NOT DELETE; TO BE REPLACED BY FIREBASE WRITE FUNCTION
    console.log(`\n\n\nAddJurnalModel>Submitting Data:`);
    console.log(`tagData1: ${JSON.stringify(tagData1)}`);
    console.log(`tagData2: ${JSON.stringify(tagData2)}`);
    console.log(`tagData3: ${JSON.stringify(tagData3)}`);
  };

  return (
    <View style={styles.container}>
      <SubmitButton onPress={onPressSubmit} />
      <ModalHeader
        title="Aktivitas"
        onPressHapusTags={() => setIsDeleting((prevState) => !prevState)} // TODO
        onPressExit={() => console.log("pressed exit")} // TODO
        isDeleting={isDeleting}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.cardScroll}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        extraHeight={200}
        onScroll={handleCloseMenu}
      >
        <View style={styles.cardMargin} />
        <ModalCard
          title={TITLES.CARD1}
          image={image1}
          setImage={setImage1}
          tagData={tagData1}
          setTagData={setTagData1}
          otherTagCategory={otherTagCategory}
          menuVisible={menuVisible1}
          handleOpenMenu={handleOpenMenu1}
          onPressItem={onPressItem}
          isDeleting={isDeleting}
        />
        <View style={styles.cardMargin} />
        <ModalCard
          title={TITLES.CARD2}
          image={image2}
          setImage={setImage2}
          tagData={tagData2}
          setTagData={setTagData2}
          otherTagCategory={otherTagCategory}
          menuVisible={menuVisible2}
          handleOpenMenu={handleOpenMenu2}
          onPressItem={onPressItem}
          isDeleting={isDeleting}
        />
        <View style={styles.cardMargin} />
        <ModalCard
          title={TITLES.CARD3}
          image={image3}
          setImage={setImage3}
          tagData={tagData3}
          setTagData={setTagData3}
          otherTagCategory={otherTagCategory}
          menuVisible={menuVisible3}
          handleOpenMenu={handleOpenMenu3}
          onPressItem={onPressItem}
          isDeleting={isDeleting}
        />
        <View style={{ height: 125 }} />
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
