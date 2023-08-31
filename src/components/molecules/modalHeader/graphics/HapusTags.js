import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function HapusTags(props) {
  return (
    <Svg
      width={161}
      height={38}
      viewBox="0 0 161 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={160} height={37} rx={18.5} fill="#fff" />
      <Path
        d="M27 29c-5.523 0-10-4.477-10-10S21.477 9 27 9s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-8-9.828A8 8 0 1019 19v.172zM32 20H22v-2h10v2zM43.438 25V11.91h1.975v5.688h6.527v-5.689h1.981V25H51.94v-5.708h-6.527V25h-1.975zm16.063.217a4.01 4.01 0 01-1.687-.345 2.843 2.843 0 01-1.195-1.016c-.29-.443-.435-.987-.435-1.63 0-.554.107-1.01.32-1.368.213-.358.5-.641.863-.85a4.505 4.505 0 011.214-.473 12.08 12.08 0 011.368-.243l1.432-.166c.366-.047.633-.122.799-.224.166-.102.249-.268.249-.499v-.044c0-.559-.158-.991-.473-1.298-.311-.307-.776-.46-1.394-.46-.643 0-1.15.143-1.52.428-.367.281-.62.595-.761.94l-1.797-.41c.213-.596.524-1.078.934-1.444.413-.37.888-.64 1.425-.805a5.564 5.564 0 011.694-.256c.392 0 .807.047 1.246.14.444.09.857.256 1.24.5.388.242.706.59.953 1.041.247.448.37 1.03.37 1.745V25H62.48v-1.342h-.077c-.123.247-.309.49-.556.728a2.954 2.954 0 01-.952.595c-.388.157-.852.236-1.394.236zm.416-1.534c.528 0 .98-.104 1.355-.313.38-.209.667-.482.863-.818.2-.341.3-.705.3-1.093v-1.266c-.068.068-.2.132-.396.192a6.189 6.189 0 01-.658.147c-.248.038-.488.075-.723.109l-.588.076a4.74 4.74 0 00-1.016.237c-.303.11-.546.27-.729.48-.179.204-.268.476-.268.817 0 .473.174.831.524 1.074.35.239.795.358 1.336.358zm6.975 4.999v-13.5h1.867v1.591h.16c.11-.204.27-.44.479-.71.209-.267.499-.502.87-.702.37-.205.86-.307 1.47-.307.792 0 1.5.2 2.122.6.622.401 1.11.979 1.463 1.733.358.754.537 1.662.537 2.723s-.177 1.971-.53 2.73c-.354.754-.84 1.335-1.458 1.744-.618.405-1.323.608-2.115.608-.597 0-1.085-.1-1.464-.3-.375-.2-.67-.435-.882-.704a5.326 5.326 0 01-.493-.716h-.115v5.21h-1.91zm1.873-8.591c0 .69.1 1.295.3 1.815.2.52.49.927.87 1.221.38.29.844.435 1.393.435.571 0 1.049-.152 1.432-.454.384-.307.673-.722.87-1.247.2-.524.3-1.114.3-1.77 0-.648-.098-1.23-.294-1.745-.192-.516-.482-.923-.87-1.221-.383-.298-.862-.447-1.438-.447-.554 0-1.022.142-1.406.428-.38.285-.667.684-.863 1.195-.196.512-.294 1.108-.294 1.79zm15.456.837v-5.746h1.918V25h-1.88v-1.7h-.102a3.063 3.063 0 01-1.087 1.31c-.494.345-1.11.518-1.847.518-.63 0-1.189-.139-1.674-.416-.482-.28-.861-.696-1.138-1.246-.273-.55-.41-1.23-.41-2.04v-6.244h1.912v6.015c0 .669.185 1.201.556 1.598.37.396.852.594 1.445.594.358 0 .713-.09 1.067-.268.358-.18.654-.45.889-.812.238-.362.355-.823.351-1.38zm11.843-3.35l-1.732.308a2.053 2.053 0 00-.345-.633 1.708 1.708 0 00-.627-.492c-.264-.128-.594-.192-.99-.192-.542 0-.994.121-1.356.364-.362.239-.543.548-.543.927 0 .328.121.592.364.793.243.2.635.364 1.176.492l1.56.358c.903.209 1.577.53 2.02.965.443.435.665 1 .665 1.694 0 .588-.17 1.112-.512 1.572-.336.456-.807.814-1.412 1.074-.601.26-1.298.39-2.09.39-1.1 0-1.997-.234-2.692-.703-.694-.473-1.12-1.144-1.278-2.014l1.847-.28c.115.48.352.845.71 1.092.358.243.824.365 1.4.365.626 0 1.127-.13 1.502-.39.375-.264.562-.586.562-.965 0-.307-.115-.565-.345-.774-.226-.209-.573-.366-1.042-.473l-1.662-.364c-.916-.209-1.593-.541-2.032-.997-.435-.456-.652-1.034-.652-1.733 0-.58.162-1.086.486-1.52.323-.436.77-.774 1.342-1.017.57-.247 1.225-.371 1.962-.371 1.061 0 1.896.23 2.506.69.61.456 1.012 1.068 1.208 1.835zm6.565-3.969v-1.7h10.131v1.7h-4.085V25h-1.968V13.61h-4.078zm13.738 11.608a4.01 4.01 0 01-1.688-.345 2.84 2.84 0 01-1.195-1.016c-.29-.443-.435-.987-.435-1.63 0-.554.107-1.01.32-1.368.213-.358.5-.641.863-.85a4.506 4.506 0 011.214-.473c.448-.107.904-.188 1.368-.243l1.432-.166c.366-.047.633-.122.799-.224.166-.102.249-.268.249-.499v-.044c0-.559-.157-.991-.473-1.298-.311-.307-.775-.46-1.393-.46-.644 0-1.151.143-1.522.428-.366.281-.62.595-.76.94l-1.796-.41c.213-.596.524-1.078.933-1.444a3.78 3.78 0 011.425-.805 5.566 5.566 0 011.694-.256c.392 0 .808.047 1.247.14.443.09.856.256 1.24.5.387.242.705.59.952 1.041.247.448.371 1.03.371 1.745V25h-1.867v-1.342h-.076c-.124.247-.309.49-.556.728a2.964 2.964 0 01-.953.595c-.388.157-.852.236-1.393.236zm.415-1.534c.529 0 .98-.104 1.355-.313.38-.209.667-.482.863-.818.2-.341.301-.705.301-1.093v-1.266c-.069.068-.201.132-.397.192a6.141 6.141 0 01-.658.147 80.04 80.04 0 01-.722.109l-.588.076c-.371.047-.71.126-1.017.237-.302.11-.545.27-.728.48-.179.204-.269.476-.269.817 0 .473.175.831.524 1.074.35.239.795.358 1.336.358zm11.092 5.203c-.78 0-1.451-.102-2.014-.306-.558-.205-1.014-.476-1.367-.812a3.41 3.41 0 01-.793-1.106l1.643-.678c.115.188.268.386.46.595.196.213.46.394.793.543.336.15.769.224 1.297.224.725 0 1.323-.177 1.796-.53.473-.35.71-.908.71-1.675v-1.93h-.122a4.367 4.367 0 01-.498.696c-.213.256-.507.477-.882.665-.375.187-.863.281-1.464.281-.776 0-1.475-.181-2.097-.543-.618-.367-1.108-.906-1.47-1.617-.358-.716-.537-1.596-.537-2.64s.177-1.94.531-2.685c.358-.746.848-1.317 1.47-1.713.622-.4 1.327-.601 2.116-.601.609 0 1.101.102 1.476.307.375.2.667.434.876.703.213.268.377.505.492.71h.141v-1.592h1.873v10.035c0 .844-.196 1.537-.588 2.078-.392.54-.923.941-1.592 1.201-.665.26-1.415.39-2.25.39zm-.019-5.618c.549 0 1.014-.128 1.393-.384.384-.26.674-.63.87-1.112.2-.486.3-1.067.3-1.745 0-.66-.098-1.242-.294-1.745-.196-.503-.484-.895-.863-1.176-.379-.286-.848-.428-1.406-.428-.576 0-1.055.149-1.438.447-.384.294-.674.695-.87 1.202a4.771 4.771 0 00-.287 1.7c0 .643.098 1.208.294 1.694.196.486.485.865.869 1.138.388.272.865.409 1.432.409zm14.369-5.69l-1.732.308a2.078 2.078 0 00-.345-.633 1.717 1.717 0 00-.627-.492c-.264-.128-.594-.192-.991-.192-.541 0-.992.121-1.355.364-.362.239-.543.548-.543.927 0 .328.121.592.364.793.243.2.635.364 1.177.492l1.559.358c.904.209 1.577.53 2.02.965.443.435.665 1 .665 1.694 0 .588-.171 1.112-.512 1.572-.336.456-.807.814-1.412 1.074-.601.26-1.298.39-2.09.39-1.1 0-1.997-.234-2.691-.703-.695-.473-1.121-1.144-1.279-2.014l1.847-.28c.116.48.352.845.71 1.092.358.243.825.365 1.4.365.626 0 1.127-.13 1.502-.39.375-.264.562-.586.562-.965 0-.307-.115-.565-.345-.774-.226-.209-.573-.366-1.042-.473l-1.662-.364c-.916-.209-1.593-.541-2.032-.997-.435-.456-.652-1.034-.652-1.733 0-.58.162-1.086.486-1.52.323-.436.771-.774 1.342-1.017.571-.247 1.225-.371 1.962-.371 1.061 0 1.897.23 2.506.69.609.456 1.012 1.068 1.208 1.835z"
        fill="#000"
      />
      <Rect x={0.5} y={0.5} width={160} height={37} rx={18.5} stroke="#000" />
    </Svg>
  );
}

export default HapusTags;
