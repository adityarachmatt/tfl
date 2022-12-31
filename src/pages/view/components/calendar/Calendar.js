import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  Dimensions,
} from "react-native";

import LeftArrow from "./graphics/LeftArrow";
import RightArrow from "./graphics/RightArrow";

import {
  getCurrentDate,
  fullDateToDD,
  getRefreshedDays,
  monthNames,
} from "./calendar-logic";

// Later: to pass down: selectedDate
const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [today, thisMonth, thisYear] = getCurrentDate();
  const convertedDays = getRefreshedDays(thisMonth, thisYear);

  const [month, setMonth] = useState(thisMonth);
  const [year, setYear] = useState(thisYear);
  const [days, setDays] = useState(convertedDays);

  useEffect(() => {
    const refreshed = getRefreshedDays(month, year);
    setDays(refreshed);
  }, [month, year]);

  const decrementMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const incrementMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderGroup
        month={month}
        year={year}
        onPressLeft={decrementMonth}
        onPressRight={incrementMonth}
      />
      <Grid
        days={days}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </View>
  );
};

const HeaderGroup = ({ month, year, onPressLeft, onPressRight }) => {
  return (
    <View style={styles.headerGroupContainer}>
      <Text
        style={styles.headerGroupTitle}
      >{`${monthNames[month]} ${year}`}</Text>
      <View style={styles.arrowContainer}>
        <Pressable onPress={() => onPressLeft()}>
          <View style={styles.leftArrowContainer}>
            <LeftArrow />
          </View>
        </Pressable>
        <Pressable onPress={() => onPressRight()}>
          <View style={styles.rightArrowContainer}>
            <RightArrow />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const Grid = ({ days, selectedDate, setSelectedDate }) => {
  return (
    <View style={styles.grid}>
      <WeekdayHeaders />
      {days.map((week, index) => (
        <Row
          weekData={week}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          key={`${week} ${index}`}
        />
      ))}
    </View>
  );
};

const WeekdayHeaders = () => (
  <View style={styles.weekdayHeaderRow}>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>Mo</Text>
    </View>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>Tu</Text>
    </View>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>We</Text>
    </View>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>Th</Text>
    </View>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>Fr</Text>
    </View>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>Sa</Text>
    </View>
    <View style={styles.weekdayHeaderRectangles}>
      <Text style={styles.weekdayHeaderText}>Su</Text>
    </View>
  </View>
);

const Row = ({ weekData, selectedDate, setSelectedDate }) => {
  return (
    <View style={styles.row}>
      {weekData.map((date, index) => {
        if (date === "") {
          return <EmptyRectangle key={index} />;
        } else {
          return date.toISOString() == selectedDate.toISOString() ? (
            <SelectedRectangle date={date} key={`${index} ${date}`} />
          ) : (
            <UnselectedRectangle
              date={date}
              onPress={setSelectedDate}
              key={`${index} ${date}`}
            />
          );
        }
      })}
    </View>
  );
};

const EmptyRectangle = () => {
  return <View style={styles.baseRectangle} />;
};

const UnselectedRectangle = ({ date, onPress }) => {
  return (
    <Pressable
      style={{ ...styles.baseRectangle, ...styles.unselectedRectangle }}
      onPress={() => onPress(date)}
    >
      <Text style={styles.baseRectangleText}>{fullDateToDD(date)}</Text>
    </Pressable>
  );
};

const SelectedRectangle = ({ date }) => {
  return (
    <View style={{ ...styles.baseRectangle, ...styles.selectedRectangle }}>
      <Text
        style={{ ...styles.baseRectangleText, ...styles.selectedRectangleText }}
      >
        {fullDateToDD(date)}
      </Text>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const componentWidth = windowWidth * 0.85;
const rectangleHeight = componentWidth / 7;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  headerGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: componentWidth,
  },
  headerGroupTitle: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
  },
  arrowContainer: {
    flexDirection: "row",
  },
  leftArrowContainer: {
    padding: 10,
  },
  rightArrowContainer: {
    padding: 10,
  },
  weekdayHeaderRow: {
    height: rectangleHeight,
    width: componentWidth,
    flexDirection: "row",
  },
  weekdayHeaderRectangles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  weekdayHeaderText: {
    fontFamily: "Inter-Bold",
  },

  grid: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  row: {
    height: rectangleHeight,
    width: componentWidth,
    flexDirection: "row",
    borderRightWidth: 1,
    borderColor: "lightgray",
  },
  baseRectangle: {
    flex: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "lightgray",
  },
  baseRectangleText: {
    fontFamily: "Inter-Light",
  },
  unselectedRectangle: {},
  selectedRectangle: {
    backgroundColor: "#2A00A2",
  },
  selectedRectangleText: {
    color: "white",
    fontFamily: "Inter-Bold",
  },
});

export default Calendar;
