import React, { useState, useRef } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalHeader from "../../components/molecules/modalHeader";
import ModalCard from "../../components/organisms/modalCard";
import Menu from "../../components/molecules/Menu";

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
  2: { content: "hello", category: "yellow", selected: false },
  3: { content: "hello", category: "red", selected: true },
  4: { content: "hello", category: "green", selected: true },
  5: { content: "hello", category: "yellow", selected: true },
  6: { content: "hello", category: "red", selected: true },
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
  const [tagData1, setTagData1] = useState(TAG_DATA1);
  const [tagData2, setTagData2] = useState(TAG_DATA2);
  const [tagData3, setTagData3] = useState(TAG_DATA3);
  const otherTag1Ref = useRef(null);
  const otherTag2Ref = useRef(null);
  const otherTag3Ref = useRef(null);
  const [menuVisible1, setMenuVisible1] = useState(false);

  const getCoordinates = (reference) => {
    [reference].current?.measure((fx, fy, width, height, px, py) => {
      console.log("Component width is: " + width);
      console.log("Component height is: " + height);
      console.log("X offset to frame: " + fx);
      console.log("Y offset to frame: " + fy);
      console.log("X offset to page: " + px);
      console.log("Y offset to page: " + py);
      return [px, py];
    });
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
      >
        <Menu x={10} y={10} />
        <ModalCard
          title={TITLES.CARD1}
          image={image1}
          setImage={setImage1}
          tagData={tagData1}
          setTagData={setTagData1}
          otherTagRef={otherTag1Ref}
        />
        <View style={styles.cardMargin} />
        <ModalCard
          title={TITLES.CARD2}
          image={image2}
          setImage={setImage2}
          tagData={tagData2}
          setTagData={setTagData2}
        />
        <View style={styles.cardMargin} />
        <ModalCard
          title={TITLES.CARD3}
          image={image3}
          setImage={setImage3}
          tagData={tagData3}
          setTagData={setTagData3}
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
