import { StyleSheet, Pressable } from "react-native";
import SubmitButtonSvg from "./graphics/SubmitButtonSvg";

export default SubmitButton = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SubmitButtonSvg />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    right: 30,
    bottom: 30,
  },
});
