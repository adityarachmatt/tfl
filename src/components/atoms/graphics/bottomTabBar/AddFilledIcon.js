import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddFilledIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 33c-8.28-.01-14.99-6.72-15-15v-.3C3.165 9.457 9.952 2.892 18.196 3.001c8.244.11 14.854 6.852 14.8 15.097C32.944 26.343 26.246 32.998 18 33zm-7.5-16.5v3h6v6h3v-6h6v-3h-6v-6h-3v6h-6z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default AddFilledIcon;
