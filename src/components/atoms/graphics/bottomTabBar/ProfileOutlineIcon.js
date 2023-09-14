import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function PersonOutlineIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_349_3754)">
        <Path
          d="M18 8.85a3.15 3.15 0 110 6.3 3.15 3.15 0 010-6.3zm0 13.5c4.455 0 9.15 2.19 9.15 3.15v1.65H8.85V25.5c0-.96 4.695-3.15 9.15-3.15zM18 6c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 13.5c-4.005 0-12 2.01-12 6V30h24v-4.5c0-3.99-7.995-6-12-6z"
          fill="#2E3A59"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_349_3754">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PersonOutlineIcon;
