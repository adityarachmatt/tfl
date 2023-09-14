import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ViewHeader from "../../components/molecules/viewHeader";
import Calendar from "../../components/organisms/calendar";

import { getCurrentDate } from "../../components/organisms/calendar/calendar-logic";

import ViewBukuScroll from "./scenes/ViewBukuScroll";
import ViewEmosiScroll from "./scenes/viewEmosiScroll";
import ViewJurnalMakanScroll from "./scenes/ViewJurnalMakanScroll";
import ViewJurnalAktivitasScroll from "./scenes/ViewJurnalAktivitasScroll";

const ViewPage = () => {
  const [today] = getCurrentDate();
  const [calendarShown, setCalendarShown] = useState(true);
  const [selectedPage, setSelectedPage] = useState("buku");
  const [selectedDate, setSelectedDate] = useState(today);
  const getSelectedPage = () => {
    switch (selectedPage) {
      case "buku":
        return <ViewBukuScroll selectedDate={selectedDate} />;
      case "emosi":
        return <ViewEmosiScroll />;
      case "makan":
        return <ViewJurnalMakanScroll />;
      case "aktivitas":
        return <ViewJurnalAktivitasScroll />;
    }
  };
  return (
    <View style={styles.container}>
      <ViewHeader
        calendarShown={calendarShown}
        setCalendarShown={setCalendarShown}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {calendarShown && (
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {getSelectedPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ViewPage;
