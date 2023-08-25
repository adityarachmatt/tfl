import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 17.333A8.342 8.342 0 01.667 9v-.167A8.333 8.333 0 119 17.333zM4.833 8.167v1.666h3.333v3.334h1.667V9.833h3.333V8.167H9.833V4.833H8.166v3.334H4.833z"
        fill="#2A00A2"
      />
    </Svg>
  );
}

export default SvgComponent;
