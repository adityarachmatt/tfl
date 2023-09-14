import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function MedicalFilledIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_349_3757)">
        <Path
          d="M30 9h-6V6c0-1.65-1.35-3-3-3h-6c-1.65 0-3 1.35-3 3v3H6c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V12c0-1.65-1.35-3-3-3zM15 6h6v3h-6V6zm7.5 16.5h-3v3c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5v-3h-3c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5h3v-3c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v3h3c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5z"
          fill="#2E3A59"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_349_3757">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MedicalFilledIcon;
