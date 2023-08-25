import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const componentWidth = windowWidth * 0.85;
export const componentHorizontalMargins = windowWidth * 0.075;

export const spaceBetween_TagIconText = 5;
export const spaceBetween_IconText = 5;

// component-specific: EmotionLog, EmotionLogList
export const emotionLogHeight = 50;
export const emotionLogListHeight = 350;
