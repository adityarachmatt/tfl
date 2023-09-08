import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function LockUnselectedIcon(props) {
  return (
    <Svg
      width={55}
      height={55}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={27.5} cy={27.5} r={27} fill="#fff" stroke="#FCFCFC" />
      <Circle cx={27.5} cy={27.5} r={27} fill="#B6B8BF" stroke="#FCFCFC" />
      <Path
        d="M31.026 22.237a4.563 4.563 0 00-8.927 1.247v2.17M26.66 30.406v2.22"
        stroke="#FCFCFC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M26.66 25.074c-5.745 0-7.66 1.568-7.66 6.27 0 4.705 1.915 6.273 7.66 6.273 5.746 0 7.661-1.568 7.661-6.272 0-4.703-1.915-6.271-7.661-6.271z"
        stroke="#FCFCFC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LockUnselectedIcon;
