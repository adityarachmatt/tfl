import { View, Text, StyleSheet } from "react-native";

import Emoji from "../../atoms/Emoji";
import { convertDate } from "../../../helper/dates";

import { colors, spacing } from "../../../styling";
const { primaryDark } = colors;
const { windowWidth, componentWidth, spaceBetween_IconText } = spacing;

import CalendarIcon from "./graphics/CalendarIcon";
import EditIcon from "./graphics/EditIcon";

const EmotionLog = ({ date, emotion, opacity }) => {
  return (
    <View style={[styles.container, { opacity: opacity }]}>
      <View style={styles.subContainer}>
        <View style={styles.subSubContainer}>
          <CalendarIcon />
          <View style={{ width: spaceBetween_IconText }} />
          <Text style={styles.text}>{convertDate(date)}</Text>
        </View>
        <View style={styles.emoji}>
          <Emoji name={emotion} height={25} width={25} />
        </View>
        <View style={styles.subSubContainer}>
          <EditIcon />
          <View style={{ width: spaceBetween_IconText }} />
          <Text style={styles.text}>Edit</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryDark,
    width: windowWidth,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: componentWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  emoji: {
    position: "absolute",
    marginLeft: componentWidth * 0.47,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default EmotionLog;
