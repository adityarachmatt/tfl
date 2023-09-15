import { View, Text, StyleSheet } from "react-native";

import Emoji from "../atoms/Emoji";

import { convertDate } from "../../helper/dates";
import { colors } from "../../styling";
const { primaryDark } = colors;

const LargeEmotion = ({ date, emotion }) => (
  <View style={styles.container}>
    <Emoji name={emotion} height={150} width={150} />
    <View style={{ height: 20 }} />
    <Text style={styles.text}>{convertDate(date)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: primaryDark,
    fontWeight: "bold",
  },
});

export default LargeEmotion;
