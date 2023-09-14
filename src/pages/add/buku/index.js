import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Keyboard } from "react-native";
import SubmitIcon from "../../../components/atoms/graphics/SubmitButtonSvg";
import BackIcon from "../../../components/atoms/graphics/BackIcon";
import { componentHorizontalMargins } from "../../../styling/spacing";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default AddBukuSequence = () => {
  const [page, setPage] = useState(1);
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captionText, setCaptionText] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const submit = () => {
    // TODO FIREBASE
    console.log(
      `\n\nAddBukuSequence>Submitting Data:
      \nimage: ${JSON.stringify(image)}\n-
      \ncaptionText: ${JSON.stringify(captionText)}\n-
      \nanswer1: ${JSON.stringify(answer1)}\n-
      \nanswer2: ${JSON.stringify(answer2)}\n-
      \nanswer3: ${JSON.stringify(answer3)}\n*`
    );
  };
  const getPage = () => {
    switch (page) {
      case 1:
        return <Page1 image={image} setImage={setImage} />;
      default:
        return (
          <Page2
            page={page}
            isSubmitting={isSubmitting}
            image={image}
            setImage={setImage}
            captionText={captionText}
            setCaptionText={setCaptionText}
            answer1={answer1}
            answer2={answer2}
            answer3={answer3}
            setAnswer1={setAnswer1}
            setAnswer2={setAnswer2}
            setAnswer3={setAnswer3}
          />
        );
    }
  };
  const next = () => {
    if (page > 3) {
      submit();
      return;
    }
    setPage((prevState) => prevState + 1);
  };
  const back = () => {
    if (page < 2) return;
    setIsSubmitting(false);
    setPage((prevState) => prevState - 1);
  };
  return (
    <View style={styles.container}>
      {getPage()}
      <Pressable style={styles.submitContainer} onPress={() => next()}>
        <SubmitIcon />
      </Pressable>
      {page > 1 && (
        <Pressable style={styles.backContainer} onPress={() => back()}>
          <BackIcon />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  submitContainer: {
    position: "absolute",
    right: componentHorizontalMargins,
    bottom: componentHorizontalMargins,
  },
  backContainer: {
    position: "absolute",
    left: componentHorizontalMargins,
    bottom: componentHorizontalMargins,
  },
});
