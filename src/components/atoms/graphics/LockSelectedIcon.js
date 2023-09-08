import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function LockSelectedIcon(props) {
  return (
    <Svg
      width={55}
      height={55}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={27.5} cy={27.5} r={27.5} fill="#fff" />
      <Circle cx={27.5} cy={27.5} r={27.5} fill="#F4B740" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.023 23.396v1.533c1.722.538 2.977 2.097 2.977 3.96v4.936C36 36.131 34.089 38 31.732 38H23.27C20.91 38 19 36.13 19 33.825v-4.937c0-1.862 1.256-3.421 2.977-3.959v-1.533c.01-2.981 2.48-5.396 5.508-5.396 3.069 0 5.538 2.415 5.538 5.396zm-5.518-3.657c2.063 0 3.74 1.64 3.74 3.657v1.318h-7.49v-1.338c.01-2.007 1.687-3.637 3.75-3.637zm.884 12.716a.88.88 0 01-.894.874.877.877 0 01-.884-.874v-2.206c0-.477.396-.865.884-.865.498 0 .894.388.894.865v2.206z"
        fill="#FCFCFC"
      />
    </Svg>
  );
}

export default LockSelectedIcon;
