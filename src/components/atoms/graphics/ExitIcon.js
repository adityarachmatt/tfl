import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function ExitIcon(props) {
  return (
    <Svg
      width={55}
      height={55}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={27.5} cy={27.5} r={27} fill="#fff" stroke="#D9DBE9" />
      <Circle cx={27.5} cy={27.5} r={27} fill="#fff" stroke="#D9DBE9" />
      <Path d="M21 34l13-13M21 21l13 13" stroke="#4E4B66" strokeWidth={2} />
    </Svg>
  );
}

export default ExitIcon;
