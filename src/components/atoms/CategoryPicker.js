import { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import ColoredCircle from "./graphics/ColoredCircle";
import ChevronDownIcon from "./graphics/ChevronDownIcon";

export default CategoryPicker = ({ category, setCategory }) => {
  const [isPicking, setIsPicking] = useState(false);
  const handlePickCategory = (pickedCategory) => {
    setCategory(pickedCategory);
    setIsPicking(false);
  };

  return (
    <View style={styles.container}>
      {!isPicking && (
        <Pressable style={styles.notPicking} onPress={() => setIsPicking(true)}>
          <ColoredCircle category={category} />
          <View style={styles.middleSpacing} />
          <ChevronDownIcon />
        </Pressable>
      )}
      {isPicking && (
        <>
          <Pressable onPress={() => handlePickCategory("green")}>
            <ColoredCircle category={"green"} />
          </Pressable>
          <View style={styles.middleSpacing} />
          <Pressable onPress={() => handlePickCategory("yellow")}>
            <ColoredCircle category={"yellow"} />
          </Pressable>
          <View style={styles.middleSpacing} />
          <Pressable onPress={() => handlePickCategory("red")}>
            <ColoredCircle category={"red"} />
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  notPicking: {
    flexDirection: "row",
  },
  middleSpacing: {
    width: 5,
  },
});
