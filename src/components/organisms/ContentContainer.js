import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

// 2. Components
import ContentHeader from "../molecules/contentHeader";
import Caption from "../atoms/Caption";
import QuestionAndAnswer from "../atoms/QuestionAndAnswer";

import { spacing } from "../../styling";
const { windowWidth, componentWidth } = spacing;

const ContentContainer = ({ content, date }) => {
  const {
    captionText,
    question1,
    answer1,
    question2,
    answer2,
    question3,
    answer3,
  } = content;

  //TODO
  const openEditModal = () => {
    console.log("openedEditModal");
  };

  return (
    <View style={styles.container}>
      <ContentHeader date={date} openEditModal={openEditModal} />
      <Image
        style={styles.image}
        source={require("../../../assets/happiness.png")}
      />
      <View style={styles.subContainer}>
        <View style={styles.spaceBetween} />
        <Caption textValue={captionText} />
        <View style={styles.spaceBetween} />
        <QuestionAndAnswer question={question1} answer={answer1} />
        <View style={styles.spaceBetween} />
        <QuestionAndAnswer question={question2} answer={answer2} />
        <View style={styles.spaceBetween} />
        <QuestionAndAnswer question={question3} answer={answer3} />
      </View>
    </View>
  );
};

export default ContentContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: componentWidth,
  },
  image: {
    height: 300,
    width: windowWidth,
  },
  spaceBetween: {
    height: 40,
  },
});
