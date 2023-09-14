import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function DataFilledIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_349_3759)">
        <Path
          d="M28.5 4.5h-21c-1.65 0-3 1.35-3 3v21c0 1.65 1.35 3 3 3h21c1.65 0 3-1.35 3-3v-21c0-1.65-1.35-3-3-3zm-15 21h-3V18h3v7.5zm6 0h-3V21h3v4.5zm0-7.5h-3v-3h3v3zm6 7.5h-3v-15h3v15z"
          fill="#2E3A59"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_349_3759">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default DataFilledIcon;
