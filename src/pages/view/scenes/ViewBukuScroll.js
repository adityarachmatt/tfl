import React from "react";
import { ScrollView } from "react-native";

import ContentContainer from "../../../components/organisms/ContentContainer";

const content = {
  captionText: "Santai di pantai",
  question1: "Apa perasaanmu hari ini?",
  answer1: "Hari ini aku merasa senang!",
  question2: "Apa yang kamu lakukan hari ini?",
  answer2: "Aku main di pantai!",
  question3: "Apakah kamu ada pertanyaan untuk MK?",
  answer3: "Kenapa langit biru??",
};

const date1 = new Date();
const date2 = new Date("Dec 30 2022");
const date3 = new Date("Dec 29 2022");

const ViewBukuScroll = () => {
  return (
    <ScrollView>
      <ContentContainer content={content} date={date1} />
      <ContentContainer content={content} date={date2} />
      <ContentContainer content={content} date={date2} />
    </ScrollView>
  );
};

export default ViewBukuScroll;
