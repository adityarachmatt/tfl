import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const CalendarUnselected = () => (
  <Svg width={62} height={41} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect
      x={0.5}
      y={0.5}
      width={61}
      height={40}
      rx={20}
      fill="#2A00A2"
      stroke="#2A00A2"
    />
    <Rect
      x={21}
      y={11}
      width={20}
      height={19}
      rx={3}
      stroke="#FCFCFC"
      strokeWidth={2}
    />
    <Path
      d="M26 9v2M36 9v2M21 16h20M25.5 21h1M30.5 21h1M35.5 21h1M25.5 25h1M30.5 25h1M35.5 25h1"
      stroke="#FCFCFC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarUnselected;
