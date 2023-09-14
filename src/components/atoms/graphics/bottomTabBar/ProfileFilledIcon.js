import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function PersonFilledIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_349_3755)">
        <Path
          d="M18 18c3.315 0 6-2.685 6-6s-2.685-6-6-6-6 2.685-6 6 2.685 6 6 6zm0 3c-4.005 0-12 2.01-12 6v3h24v-3c0-3.99-7.995-6-12-6z"
          fill="#2E3A59"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_349_3755">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PersonFilledIcon;
