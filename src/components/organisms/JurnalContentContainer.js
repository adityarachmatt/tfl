import { View, FlatList, StyleSheet } from "react-native";
import ModalCardViewOnly from "./modalCard/ModalCardViewOnly";
import ContentHeader from "../molecules/contentHeader";
import { getStandardizedDate } from "./calendar/calendar-logic";

/* CONSTANTS; TO BE FETCHED FROM FIREBASE */
const TAG_DATA = {
  1: { content: "Mie Goreng", category: "yellow", selected: false },
  2: { content: "Koko Crunch", category: "red", selected: false },
  3: { content: "Bacang", category: "green", selected: false },
  4: { content: "Broccoli", category: "green", selected: false },
  5: { content: "Avocado", category: "green", selected: false },
};

const IMAGE = "";

const DATA = [
  { id: 1, title: "Jurnal Card", tagData: TAG_DATA, image: IMAGE },
  { id: 2, title: "Jurnal Card", tagData: TAG_DATA, image: IMAGE },
  { id: 3, title: "Jurnal Card", tagData: TAG_DATA, image: IMAGE },
];

export default JurnalContentContainer = ({ entry_id, date }) => {
  console.log(`ViewJurnalDay>date: ${date}`);
  const renderItem = ({ item }) => {
    const { title, tagData, image } = item;
    return (
      <View style={styles.modalCardContainer}>
        <ModalCardViewOnly title={title} tagData={tagData} image={image} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ContentHeader
        date={getStandardizedDate(new Date())}
        openEditModal={() => console.log("opening jurnal edit modal")}
      />
      <FlatList data={DATA} renderItem={renderItem} scrollEnabled={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  modalCardContainer: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
