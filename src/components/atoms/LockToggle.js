import { Pressable } from "react-native";
import LockUnselectedIcon from "./graphics/LockUnselectedIcon";
import LockSelectedIcon from "./graphics/LockSelectedIcon";

export default LockToggle = ({ isSelected, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      {isSelected ? <LockSelectedIcon /> : <LockUnselectedIcon />}
    </Pressable>
  );
};
