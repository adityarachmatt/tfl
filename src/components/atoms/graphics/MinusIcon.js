import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MinusIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 12h8m-4 9a9 9 0 110-18 9 9 0 010 18z"
        stroke="#ED2E7E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MinusIcon;
