import { View, Text, StyleSheet } from "react-native";
import AddJurnalModule from "./AddJurnalModule";

export default AddJurnalAktivitasPage = () => {
  return (
    <View style={styles.container}>
      <AddJurnalModule />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
