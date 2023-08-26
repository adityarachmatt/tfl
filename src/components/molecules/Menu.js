import { View, Text } from "react-native";

export default Menu = ({ x, y }) => {
  return (
    <View style={{ position: "absolute", left: x, top: y, zIndex: 10 }}>
      <Text>Menu</Text>
    </View>
  );
};
