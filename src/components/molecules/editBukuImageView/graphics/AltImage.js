import * as React from "react";
import { Dimensions } from "react-native";
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const WINDOW_WIDTH = Dimensions.get("window").width;

const DIMENSIONS = {
  WIDTH: WINDOW_WIDTH,
  HEIGHT: (WINDOW_WIDTH * 277) / 414,
};

function AltImage(props) {
  return (
    <Svg
      width={DIMENSIONS.WIDTH}
      height={DIMENSIONS.HEIGHT}
      viewBox="0 0 415 277"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 0h415v237c0 22.091-17.909 40-40 40H40c-22.091 0-40-17.909-40-40V0z"
        fill="url(#paint0_linear_2041_1818)"
      />
      <Circle cx={207.5} cy={138.5} r={27.5} fill="#fff" />
      <Circle cx={207.5} cy={138.5} r={27.5} fill="#FCFCFC" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M212.44 133.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934a4.368 4.368 0 01-4.36 4.355h-11.28a4.361 4.361 0 01-4.36-4.355v-5.934a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.119.106-.223c.256-.539.539-1.135.714-1.486.46-.899 1.24-1.398 2.21-1.408h4.71c.97.01 1.76.509 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.219zm-.73 3.836c0 .5.4.899.9.899s.91-.399.91-.899a.913.913 0 00-.91-.909c-.5 0-.9.41-.9.909zm-6.44 1.548a2.424 2.424 0 011.73-.719c.65 0 1.26.25 1.72.709.46.46.71 1.069.71 1.719a2.438 2.438 0 01-2.43 2.427c-.65 0-1.26-.25-1.72-.709a2.41 2.41 0 01-.71-1.718v-.01c-.01-.63.24-1.239.7-1.699zm4.5 4.485a3.927 3.927 0 01-6.7-2.776 3.864 3.864 0 011.14-2.767 3.918 3.918 0 012.79-1.159c1.05 0 2.04.409 2.78 1.149a3.939 3.939 0 011.15 2.777 3.957 3.957 0 01-1.16 2.776z"
        fill="#130F26"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2041_1818"
          x1={0}
          y1={0}
          x2={412.405}
          y2={280.811}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7433FF" />
          <Stop offset={1} stopColor="#FFA3FD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default AltImage;
