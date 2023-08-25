import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import ModalHeader from "../../components/molecules/modalHeader";
import ModalCard from "../../components/organisms/modalCard";

const AddJurnalModule = () => {
  return (
    <View>
      <ModalHeader
        title="Aktivitas"
        onPressHapusTags={() => console.log("pressed hapus tags")} // TODO
        onPressExit={() => console.log("pressed exit")} // TODO
      />
      <ScrollView contentContainerStyle={styles.cardScroll}>
        <ModalCard />
        <View style={styles.cardMargin} />
        <ModalCard />
        <View style={styles.cardMargin} />
        <ModalCard />
        <View style={styles.cardMargin} />
      </ScrollView>
    </View>
  );
};

export default AddJurnalModule;

const styles = StyleSheet.create({
  cardScroll: {
    alignItems: "center",
    marginVertical: 20,
  },
  cardMargin: {
    height: 40,
  },
});
