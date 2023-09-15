import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import ColoredCircle from "../../atoms/graphics/ColoredCircle";
import { colors } from "../../../styling";

const DEFAULT_ITEMS = [
  { category: "green", text: "Sehat" },
  { category: "yellow", text: "Biasa" },
  { category: "red", text: "Tidak Sehat" },
];

const DURATION = 300;
const ANIMATION_OFFSET = {
  X: 10,
  Y: 5,
};

export default ContextMenu = ({ tapLocation, items, onPressItem }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const xAnim = useRef(new Animated.Value(0)).current;
  const yAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    Animated.timing(xAnim, {
      toValue: ANIMATION_OFFSET.X,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [xAnim]);

  useEffect(() => {
    Animated.timing(yAnim, {
      toValue: ANIMATION_OFFSET.Y,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [xAnim]);

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      {DEFAULT_ITEMS.map((item, index) => {
        return (
          <MenuRow
            item={item}
            key={index}
            index={index}
            length={DEFAULT_ITEMS.length}
            onPressItem={onPressItem}
          />
        );
      })}
    </Animated.View>
  );
};

const MenuRow = ({ item, index, length, onPressItem }) => {
  const getContainerStyle = () => {
    switch (index) {
      case 0:
        return styles.firstMenuRow;
      case length - 1:
        return styles.lastMenuRow;
      default:
        return styles.middleMenuRow;
    }
  };
  return (
    <Pressable
      style={[styles.menuRow, getContainerStyle()]}
      onPress={() => onPressItem(item.category)}
    >
      <ColoredCircle category={item.category} />
      <View style={{ width: 5 }} />
      <Text style={styles.text}>{item.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.primary.bg,
    borderColor: colors.primary.dark,
  },
  firstMenuRow: {
    borderBottomWidth: 1,
  },
  lastMenuRow: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  middleMenuRow: {
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 13,
    color: colors.primary.dark,
  },
});
