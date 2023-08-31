import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SubmitButtonSvg(props) {
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
        d="M35 4C17.88 4 4 17.88 4 35c0 17.12 13.88 31 31 31 17.12 0 31-13.88 31-31C66 17.88 52.12 4 35 4z"
        stroke="#DED3FF"
        strokeWidth={8}
      />
      <Path
        d="M8 35C8 20.088 20.088 8 35 8s27 12.088 27 27-12.088 27-27 27S8 49.912 8 35z"
        fill="#5F2EEA"
      />
      <Path
        d="M32 28l6.963 6.963L32 41.926"
        stroke="#FCFCFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SubmitButtonSvg;
