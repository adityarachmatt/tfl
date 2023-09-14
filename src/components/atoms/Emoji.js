import { View, Image } from "react-native";

const LIST = {
  happy: require("../../../assets/emojis/happy.png"),
  blushing: require("../../../assets/emojis/blushing.png"),
  neutral: require("../../../assets/emojis/neutral.png"),
  sad: require("../../../assets/emojis/sad.png"),
  crying: require("../../../assets/emojis/crying.png"),
};

const Emoji = ({ name, height, width }) => (
  <View>
    <Image source={LIST[name]} style={{ height, width }} />
  </View>
);

export default Emoji;
