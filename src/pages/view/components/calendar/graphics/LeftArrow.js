import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftArrow = (props) => (
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
      d="m10.543.543 1.414 1.414L6.164 7.75l5.793 5.793-1.414 1.414L3.336 7.75 10.543.543Z"
      fill="#000"
    />
  </Svg>
);

export default LeftArrow;
