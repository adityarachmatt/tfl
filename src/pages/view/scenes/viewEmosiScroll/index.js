import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import LargeEmotion from "../../../../components/molecules/LargeEmotion";
import EmotionLog from "../../../../components/molecules/emotionLog";
import { getOpacity, getRelativeIndex, getTopViewableIndex } from "./logic";
import { spacing } from "../../../../styling";
const { emotionLogListHeight } = spacing;

const today = new Date();

const DATA = [
  { date: today, emotion: "sad" },
  { date: new Date("January 2"), emotion: "happy" },
  { date: new Date("January 3"), emotion: "sad" },
  { date: new Date("January 4"), emotion: "neutral" },
  { date: new Date("January 5"), emotion: "crying" },
  { date: new Date("January 6"), emotion: "happy" },
  { date: new Date("January 7"), emotion: "sad" },
  { date: new Date("January 8"), emotion: "neutral" },
  { date: new Date("January 9"), emotion: "crying" },
  { date: new Date("January 10"), emotion: "happy" },
  { date: new Date("January 11"), emotion: "sad" },
  { date: new Date("January 12"), emotion: "neutral" },
  { date: new Date("January 13"), emotion: "crying" },
  { date: new Date("January 14"), emotion: "blushing" },
  { date: new Date("January 15"), emotion: "neutral" },
];

const ViewEmosiScroll = () => {
  const [y, setY] = useState(0);

  const renderItem = ({ item, index }) => {
    const relativeIndex = getRelativeIndex(y, index);
    const opacity = getOpacity(relativeIndex);
    return (
      <EmotionLog date={item.date} emotion={item.emotion} opacity={opacity} />
    );
  };

  const getSelectedIndex = () => {
    const selectedIndex = Math.floor(getTopViewableIndex(y) + 4);
    if (selectedIndex > DATA.length - 1) {
      return DATA.length - 1;
    }
    return selectedIndex;
  };

  const selectedIndex = getSelectedIndex();

  return (
    <View style={styles.container}>
      <LargeEmotion
        date={DATA[selectedIndex].date}
        emotion={DATA[selectedIndex].emotion}
      />
      <View style={{ height: 50 }} />
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          onScroll={(e) => {
            setY(e.nativeEvent.contentOffset.y);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    height: 400,
  },
});

export default ViewEmosiScroll;
