import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Buku(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_349_2813)" fill="#323232">
        <Path opacity={0.3} d="M5 18.08V19h.92l9.06-9.06-.92-.92L5 18.08z" />
        <Path d="M20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
      </G>
      <Defs>
        <ClipPath id="clip0_349_2813">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Buku;
