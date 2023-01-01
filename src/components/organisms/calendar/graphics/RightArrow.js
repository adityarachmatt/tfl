import React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m5.457 15.457-1.414-1.414L9.836 8.25 4.043 2.457l1.414-1.414 7.207 7.207-7.207 7.207Z"
      fill="#000"
    />
  </Svg>
);

export default RightArrow;
