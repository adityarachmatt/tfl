import { FlatList, View, Text } from "react-native";
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
        <Text>{`entry_id: ${item.entry_id} \tdate: ${item.date}`}</Text>
        <JurnalContentContainer />
      </View>
    );
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.entry_id}${index}`}
    />
  );
};
