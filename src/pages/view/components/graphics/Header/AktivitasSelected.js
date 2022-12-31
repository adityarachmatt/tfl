import React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

const AktivitasSelected = () => (
  <Svg width={62} height={41} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M1 .5H.5v40h41c11.046 0 20-8.954 20-20s-8.954-20-20-20H1Z"
      fill="#0096B7"
      stroke="#0096B7"
    />
    <G clipPath="url(#a)">
      <Path
        d="M31.49 14.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4Z"
        fill="#FCFCFC"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(18 9)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AktivitasSelected;
