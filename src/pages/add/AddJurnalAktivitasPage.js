import { View, Text, StyleSheet } from "react-native";
import AddJurnalModule from "./AddJurnalModule";

export default AddJurnalAktivitasPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddJurnalModule navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
