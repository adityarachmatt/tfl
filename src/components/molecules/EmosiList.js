import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import Emoji from "../atoms/Emoji";

export default EmosiList = () => {
  return (
    <View style={styles.container}>
      <Emosi emotion="happy" />
      <Emosi emotion="blushing" />
      <Emosi emotion="neutral" />
      <Emosi emotion="sad" />
      <Emosi emotion="crying" />
    </View>
  );
};

const Emosi = ({ emotion }) => {
  const tap = (emosi) => {
    //TODO FIREBASE
    switch (emosi) {
      case "happy":
        console.log("Pressed happy");
        return;
      case "blushing":
        console.log("Pressed blushing");
        return;
      case "neutral":
        console.log("Pressed neutral");
        return;
      case "sad":
        console.log("Pressed sad");
        return;
      case "crying":
        console.log("Pressed crying");
        return;
    }
  };
  return (
    <Pressable style={styles.emosiContainer} onPress={() => tap(emotion)}>
      <Emoji name={emotion} height={150} width={150} />
    </Pressable>
  );
};

const DIMENSIONS = {
  EMOSI_CONTAINER: {
    LENGTH: Dimensions.get("window").width * 0.5,
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  emosiContainer: {
    width: DIMENSIONS.EMOSI_CONTAINER.LENGTH,
    height: DIMENSIONS.EMOSI_CONTAINER.LENGTH,
    alignItems: "center",
    justifyContent: "center",
  },
});
