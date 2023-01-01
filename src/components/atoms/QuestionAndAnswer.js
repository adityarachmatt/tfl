import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors, spacing } from "../../styling";
const { grayscale1, grayscale2 } = colors;
const { componentWidth } = spacing;

const QuestionAndAnswer = ({ question, answer }) => (
  <View>
    <Text style={styles.question}>{question}</Text>
    <Text style={styles.answer}>{answer}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: componentWidth,
  },
  question: {
    color: grayscale1,
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Inter-Bold",
  },
  answer: {
    color: grayscale2,
    fontSize: 16,
    fontFamily: "Inter-Light",
  },
});

export default QuestionAndAnswer;
