import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";

import BukuContentContainer from "../../../components/organisms/BukuContentContainer";

const content = {
  captionText: "Santai di pantai",
  question1: "Apa perasaanmu hari ini?",
  answer1: "Hari ini aku merasa senang!",
  question2: "Apa yang kamu lakukan hari ini?",
  answer2: "Aku main di pantai!",
  question3: "Apakah kamu ada pertanyaan untuk MK?",
  answer3: "Kenapa langit biru??",
};

const dataFactory = (length, selectedDate) => {
  const date = new Date(selectedDate);
  const output = [];
  for (let i = 0; i < length; i++) {
    output.push({ content: content, date: new Date(date) });
    date.setDate(date.getDate() + 1);
  }
  return output;
};

const renderItem = ({ item }) => (
  <BukuContentContainer content={item.content} date={item.date} />
);

const ViewBukuScroll = ({ selectedDate }) => {
  const DATA = dataFactory(4, selectedDate);

  const flatListRef = useRef();

  useEffect(() => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }, [selectedDate]);

  return (
    <FlatList
      ref={flatListRef}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.date.toISOString()}
    />
  );
};

export default ViewBukuScroll;
