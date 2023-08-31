import { View, FlatList } from "react-native";
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

const IMAGE =
  "file:///var/mobile/Containers/Data/Application/901C0C15-AC12-4537-AE6A-94D18825ADD8/Library/Caches/ExponentExperienceData/%2540anonymous%252Ftfl-aa710b44-35ce-4a9f-aa13-c550f5399161/ImagePicker/0ED17CEC-CD53-4111-B34B-FAD2ADEE35D8.jpg";

const DATA = [
  { id: 1, title: "Jurnal Card", tagData: TAG_DATA, image: IMAGE },
  { id: 2, title: "Jurnal Card", tagData: TAG_DATA, image: IMAGE },
  { id: 3, title: "Jurnal Card", tagData: TAG_DATA, image: IMAGE },
];

export default JurnalContentContainer = ({ entry_id, date }) => {
  console.log(`ViewJurnalDay>date: ${date}`);
  const renderItem = ({ item }) => {
    const { title, tagData, image } = item;
    return <ModalCardViewOnly title={title} tagData={tagData} image={image} />;
  };
  return (
    <View>
      <ContentHeader
        date={getStandardizedDate(new Date())}
        openEditModal={() => console.log("opening jurnal edit modal")}
      />
      <FlatList data={DATA} renderItem={renderItem} scrollEnabled={false} />
    </View>
  );
};
