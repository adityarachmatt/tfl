import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackIcon(props) {
  return (
    <Svg
      width={70}
      height={70}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.8}
        d="M35 66c17.12 0 31-13.88 31-31C66 17.88 52.12 4 35 4 17.88 4 4 17.88 4 35c0 17.12 13.88 31 31 31z"
        stroke="#DEF9FF"
        strokeWidth={8}
      />
      <Path
        d="M62 35c0 14.912-12.088 27-27 27S8 49.912 8 35 20.088 8 35 8s27 12.088 27 27z"
        fill="#1CC8EE"
      />
      <Path
        d="M38 42l-6.963-6.963L38 28.074"
        stroke="#FCFCFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackIcon;
