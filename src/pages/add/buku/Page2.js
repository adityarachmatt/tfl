import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import EditBukuImageView from "../../../components/molecules/editBukuImageView";
import Caption from "../../../components/atoms/Caption";
import QuestionAndAnswer from "../../../components/atoms/QuestionAndAnswer";
import { componentHorizontalMargins } from "../../../styling/spacing";

const QUESTIONS = {
  1: "Apa perasaanmu hari ini?",
  2: "Apa yang kamu lakukan hari ini?",
  3: "Apakah kamu ada pertanyaan untuk MK?",
};

export default Page2 = ({
  page,
  image,
  setImage,
  captionText,
  setCaptionText,
  answer1,
  setAnswer1,
  answer2,
  setAnswer2,
  answer3,
  setAnswer3,
}) => {
  const getQA = () => {
    switch (page) {
      case 2:
        return (
          <View style={styles.qaContainer}>
            <QuestionAndAnswer
              question={QUESTIONS[1]}
              isEditable={true}
              answer={answer1}
              setAnswer={setAnswer1}
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.qaContainer}>
            <QuestionAndAnswer
              question={QUESTIONS[2]}
              isEditable={true}
              answer={answer2}
              setAnswer={setAnswer2}
            />
          </View>
        );
      case 4:
        return (
          <View style={styles.qaContainer}>
            <QuestionAndAnswer
              question={QUESTIONS[3]}
              isEditable={true}
              answer={answer3}
              setAnswer={setAnswer3}
            />
          </View>
        );
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EditBukuImageView image={image} setImage={setImage} />
      <View style={styles.captionContainer}>
        <Caption
          isEditable={true}
          textValue={captionText}
          setTextValue={setCaptionText}
        />
      </View>
      {getQA()}
    </ScrollView>
  );
};

const DIMENSIONS = {
  MARGIN_HORIZONTAL: componentHorizontalMargins,
  MARGIN_VERTICAL: 40,
  SCREEN_HEIGHT: Dimensions.get("screen").height,
};

const styles = StyleSheet.create({
  container: {},
  captionContainer: {
    marginLeft: DIMENSIONS.MARGIN_HORIZONTAL,
    marginVertical: DIMENSIONS.MARGIN_VERTICAL,
  },
  qaContainer: {
    marginLeft: DIMENSIONS.MARGIN_HORIZONTAL,
    marginBottom: DIMENSIONS.MARGIN_VERTICAL * 1.25,
  },
  submitContainer: {
    position: "absolute",
    right: DIMENSIONS.MARGIN_HORIZONTAL,
    top: DIMENSIONS.SCREEN_HEIGHT - (DIMENSIONS.MARGIN_HORIZONTAL + 70),
  },
});
