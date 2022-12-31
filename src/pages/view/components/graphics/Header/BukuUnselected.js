import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default BukuUnselected = () => {
  return (
    <Svg
      width="62"
      height="41"
      viewBox="0 0 62 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M61.5 1V0.5H61H20.5C9.4543 0.5 0.5 9.45431 0.5 20.5C0.5 31.5457 9.4543 40.5 20.5 40.5H61H61.5V40V1Z"
        fill="#DEF9FF"
        stroke="#0096B7"
      />
      <Path
        d="M23.42 29.579C23.1395 29.5785 22.8721 29.4603 22.683 29.253C22.4904 29.0475 22.3948 28.7695 22.42 28.489L22.665 25.795L33.983 14.481L37.52 18.017L26.205 29.33L23.511 29.575C23.48 29.578 23.449 29.579 23.42 29.579ZM38.226 17.31L34.69 13.774L36.811 11.653C36.9986 11.4653 37.2531 11.3597 37.5185 11.3597C37.7839 11.3597 38.0384 11.4653 38.226 11.653L40.347 13.774C40.5348 13.9616 40.6403 14.2161 40.6403 14.4815C40.6403 14.7469 40.5348 15.0015 40.347 15.189L38.227 17.309L38.226 17.31Z"
        fill="#0096B7"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
