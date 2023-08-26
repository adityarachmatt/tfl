import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ChevronDownIcon(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.515 8.465L12 16.95l8.485-8.485-1.414-1.415L12 14.122 4.929 7.05 3.515 8.465z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default ChevronDownIcon;
