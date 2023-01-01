import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const CalendarIcon = (props) => (
  <Svg
    width={22}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1.833}
      y={3.75}
      width={18.333}
      height={17.417}
      rx={3}
      stroke="#2A00A2"
      strokeWidth={2}
    />
    <Path
      d="M6.417 1.917V3.75M15.583 1.917V3.75M1.833 8.333h18.334M5.958 12.917h.917M10.542 12.917h.916M15.125 12.917h.917M5.958 16.583h.917M10.542 16.583h.916M15.125 16.583h.917"
      stroke="#2A00A2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarIcon;
