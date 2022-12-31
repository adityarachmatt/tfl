import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./components/Header";
import Calendar from "./components/calendar/Calendar";

import { getCurrentDate } from "./components/calendar/calendar-logic";

const ViewTemplate = () => {
  const [today] = getCurrentDate();
  const [calendarShown, setCalendarShown] = useState(true);
  const [selectedPage, setSelectedPage] = useState("buku");
  const [selectedDate, setSelectedDate] = useState(today);
  return (
    <View style={styles.container}>
      <Header
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
      {console.log(
        `\n calendarShown: ${calendarShown} \n selectedpage: ${selectedPage} \n selectedDate: ${selectedDate}`
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

export default ViewTemplate;
