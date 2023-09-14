import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function DataOutlineIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_349_3758)" fill="#2E3A59">
        <Path d="M28.5 4.5h-21c-1.65 0-3 1.35-3 3v21c0 1.65 1.35 3 3 3h21c1.65 0 3-1.35 3-3v-21c0-1.65-1.35-3-3-3zm0 24h-21v-21h21v21z" />
        <Path d="M13.5 18h-3v7.5h3V18zM25.5 10.5h-3v15h3v-15zM19.5 21h-3v4.5h3V21zM19.5 15h-3v3h3v-3z" />
      </G>
      <Defs>
        <ClipPath id="clip0_349_3758">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default DataOutlineIcon;
