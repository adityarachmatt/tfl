import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Makan(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 4V0h-2v4h-5l.23 2.31C13.9 7.16 17 9.77 17 14l.02 8h3.18L22 4h-5zM0 20h15v2H0v-2zM7.5 7.99C3.75 7.99 0 10 0 14h15c0-4-3.75-6.01-7.5-6.01zM0 16h15v2H0v-2z"
        fill="#323232"
      />
    </Svg>
  );
}

export default Makan;
