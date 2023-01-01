import React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

const MakanSelected = () => (
  <Svg width={62} height={41} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill="#0096B7" stroke="#0096B7" d="M.5.5h61v40H.5z" />
    <G clipPath="url(#a)">
      <Path
        d="M36.899 13V9h-2.145v4H29.39l.247 2.31c3.936.85 7.26 3.46 7.26 7.69l.022 8h3.41l1.931-18h-5.362ZM18.667 29h16.087v2H18.667v-2Zm8.043-12.01c-4.021 0-8.043 2.01-8.043 6.01h16.087c0-4-4.022-6.01-8.044-6.01ZM18.667 25h16.087v2H18.667v-2Z"
        fill="#FCFCFC"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(17.594 8)"
          d="M0 0h25.739v24H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MakanSelected;
