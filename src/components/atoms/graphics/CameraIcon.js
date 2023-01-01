import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#00966D">
      <Path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <Path d="M16.83 4 15 2H9L7.17 4H2v16h20V4h-5.17ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
