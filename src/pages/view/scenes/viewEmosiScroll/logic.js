import { spacing } from "../../../../styling";
const { emotionLogHeight } = spacing;

export const getTopViewableIndex = (y) => {
  return y / emotionLogHeight;
};

export const getRelativeIndex = (y, index) => {
  const topViewableIndex = getTopViewableIndex(y);
  return index - topViewableIndex;
};

export const getOpacity = (relativeIndex) => {
  const diff = Math.abs(4 - relativeIndex);
  return 1 - diff * 0.25;
};
