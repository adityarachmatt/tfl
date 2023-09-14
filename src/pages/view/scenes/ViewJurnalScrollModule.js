import { FlatList, View, Text, StyleSheet } from "react-native";
import JurnalContentContainer from "../../../components/organisms/JurnalContentContainer";

/* TO BE FETCHED */
const today = new Date();
const DATA = [
  { entry_id: "uid", date: today },
  { entry_id: "uid", date: today },
  { entry_id: "uid", date: today },
  { entry_id: "uid", date: today },
];

export default ViewJurnalScroll = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <JurnalContentContainer />
      </View>
    );
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.entry_id}${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});
