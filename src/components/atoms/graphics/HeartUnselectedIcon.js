import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function HeartUnselectedIcon(props) {
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
        clipRule="evenodd"
        d="M18.372 27.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 015.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4z"
        stroke="#FCFCFC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M31.5 22.7a2.781 2.781 0 011.917 2.422"
        stroke="#FCFCFC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartUnselectedIcon;
