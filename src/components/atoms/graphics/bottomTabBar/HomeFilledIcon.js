import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeFilledIcon(props) {
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
        d="M3 19.5L16.94 5.56a1.5 1.5 0 012.12 0L33 19.5h-3v12a1.5 1.5 0 01-1.5 1.5H21V22.5h-6V33H7.5A1.5 1.5 0 016 31.5v-12H3z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default HomeFilledIcon;
