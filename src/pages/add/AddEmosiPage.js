import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import EmosiList from "../../components/molecules/EmosiList";
import ExitIcon from "../../components/atoms/graphics/ExitIcon";
import { componentHorizontalMargins } from "../../styling/spacing";

export default AddEmosiPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <EmosiList />
      </View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.exitContainer}
      >
        <ExitIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },
  exitContainer: {
    position: "absolute",
    top: componentHorizontalMargins + 20,
    right: componentHorizontalMargins,
  },
});
