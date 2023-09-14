import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeOutlineIcon(props) {
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
        d="M28.5 33h-21A1.5 1.5 0 016 31.5v-12H3L16.938 5.56a1.5 1.5 0 012.123 0L33 19.5h-3v12a1.5 1.5 0 01-1.5 1.5zM15 22.5h6V30h6V17.742l-9-9-9 9V30h6v-7.5z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default HomeOutlineIcon;
