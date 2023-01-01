import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ViewHeader from "../../components/molecules/viewHeader";
import Calendar from "../../components/organisms/calendar";

import { getCurrentDate } from "../../components/organisms/calendar/calendar-logic";

import ViewBukuScroll from "./scenes/ViewBukuScroll";

const ViewPage = () => {
  const [today] = getCurrentDate();
  const [calendarShown, setCalendarShown] = useState(true);
  const [selectedPage, setSelectedPage] = useState("buku");
  const [selectedDate, setSelectedDate] = useState(today);
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
      <ViewBukuScroll />
      {console.log(
        `\n ViewPage Data: \n calendarShown: ${calendarShown} \n selectedpage: ${selectedPage} \n selectedDate: ${selectedDate}`
      )}
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
