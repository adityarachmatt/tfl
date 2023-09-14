import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddOutlineIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 33C9.716 33 3 26.284 3 18 3 9.716 9.716 3 18 3c8.284 0 15 6.716 15 15-.01 8.28-6.72 14.99-15 15zM6 18.258c.071 6.602 5.462 11.906 12.064 11.871 6.602-.036 11.935-5.398 11.935-12s-5.333-11.964-11.935-12C11.462 6.094 6.07 11.399 6 18v.258zM19.5 25.5h-3v-6h-6v-3h6v-6h3v6h6v3h-6v6z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default AddOutlineIcon;
