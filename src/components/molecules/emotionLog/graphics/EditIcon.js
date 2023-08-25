import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.937 21.995a.933.933 0 0 1-.688-.304.922.922 0 0 1-.245-.712l.228-2.513L15.79 7.912l3.3 3.298L8.533 21.763l-2.513.229a.887.887 0 0 1-.084.003Zm13.81-11.444L16.45 7.252l1.979-1.978a.933.933 0 0 1 1.32 0l1.978 1.978a.933.933 0 0 1 0 1.32L19.75 10.55h-.001Z"
      fill="#FCFCFC"
    />
  </Svg>
);

export default SvgComponent;
