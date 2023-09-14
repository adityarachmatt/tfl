import { View, StyleSheet } from "react-native";
import { colors } from "../../../styling";

export default ColoredCircle = ({ category }) => {
  const getStyle = () => {
    switch (category) {
      case "green":
        return styles.green;
      case "yellow":
        return styles.yellow;
      case "red":
        return styles.red;
    }
  };

  return <View style={[styles.categoryBase, getStyle()]} />;
};

const styles = StyleSheet.create({
  categoryBase: {
    height: 12,
    width: 12,
    borderRadius: 100,
  },
  green: {
    backgroundColor: colors.success.default,
  },
  yellow: {
    backgroundColor: colors.warning.default,
  },
  red: {
    backgroundColor: colors.error.default,
  },
});
