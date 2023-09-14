import * as React from "react";
import Svg, {
  Rect,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { Dimensions, View } from "react-native";
import { aspectRatio, width } from "../sharedLocalStyles/spacing";

function SvgComponent(props) {
  return (
    <View style={{ width: width, aspectRatio }}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 350 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Rect
          width={350}
          height={300}
          rx={7}
          fill="url(#paint0_linear_2008_1420)"
        />
        <Circle cx={174.5} cy={149.5} r={27.5} fill="#fff" />
        <Circle cx={174.5} cy={149.5} r={27.5} fill="#FCFCFC" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M179.44 144.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934a4.368 4.368 0 01-4.36 4.355h-11.28a4.361 4.361 0 01-4.36-4.355v-5.934a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.119.106-.223c.256-.539.539-1.135.714-1.486.46-.899 1.24-1.398 2.21-1.408h4.71c.97.01 1.76.509 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.219zm-.73 3.836c0 .5.4.899.9.899s.91-.399.91-.899a.913.913 0 00-.91-.909c-.5 0-.9.41-.9.909zm-6.44 1.548a2.424 2.424 0 011.73-.719c.65 0 1.26.25 1.72.709.46.46.71 1.069.71 1.719a2.438 2.438 0 01-2.43 2.427c-.65 0-1.26-.25-1.72-.709a2.41 2.41 0 01-.71-1.718v-.01c-.01-.63.24-1.239.7-1.699zm4.5 4.485a3.927 3.927 0 01-6.7-2.776 3.864 3.864 0 011.14-2.767 3.918 3.918 0 012.79-1.159c1.05 0 2.04.409 2.78 1.149a3.939 3.939 0 011.15 2.777 3.957 3.957 0 01-1.16 2.776z"
          fill="#130F26"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_2008_1420"
            x1={0}
            y1={0}
            x2={397.355}
            y2={210.692}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7433FF" />
            <Stop offset={1} stopColor="#FFA3FD" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}

export default SvgComponent;
