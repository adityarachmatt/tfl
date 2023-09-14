import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import EditBukuImageView from "../../components/molecules/editBukuImageView";
import { componentHorizontalMargins } from "../../styling/spacing";
import Caption from "../../components/atoms/Caption";
import QuestionAndAnswer from "../../components/atoms/QuestionAndAnswer";
import SubmitButtonSvg from "../../components/atoms/graphics/SubmitButtonSvg";

const QUESTIONS = {
  1: "Apa perasaanmu hari ini?",
  2: "Apa yang kamu lakukan hari ini?",
  3: "Apakah kamu ada pertanyaan untuk MK?",
};

export default EditBukuModal = () => {
  const [captionText, setCaptionText] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const pressSubmit = () => {
    console.log("pressed submit");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EditBukuImageView />
      <View style={styles.captionContainer}>
        <Caption
          isEditable={true}
          textValue={captionText}
          setTextValue={setCaptionText}
        />
      </View>
      <View style={styles.qaContainer}>
        <QuestionAndAnswer
          question={QUESTIONS[1]}
          isEditable={true}
          answer={answer1}
          setAnswer={setAnswer1}
        />
      </View>
      <View style={styles.qaContainer}>
        <QuestionAndAnswer
          question={QUESTIONS[2]}
          isEditable={true}
          answer={answer2}
          setAnswer={setAnswer2}
        />
      </View>
      <View style={styles.qaContainer}>
        <QuestionAndAnswer
          question={QUESTIONS[3]}
          isEditable={true}
          answer={answer3}
          setAnswer={setAnswer3}
        />
      </View>
      <Pressable style={styles.submitContainer} onPress={pressSubmit}>
        <SubmitButtonSvg />
      </Pressable>
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
