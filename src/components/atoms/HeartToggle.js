import { Pressable } from "react-native";
import HeartUnselectedIcon from "./graphics/HeartUnselectedIcon";
import HeartSelectedIcon from "./graphics/HeartSelectedIcon";

export default HeartToggle = ({ isSelected, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      {isSelected ? <HeartSelectedIcon /> : <HeartUnselectedIcon />}
    </Pressable>
  );
};
