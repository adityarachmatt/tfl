import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import ViewJurnalScroll from "./pages/view/scenes/ViewJurnalScroll";

const TestingScreen = () => {
  return (
    <View style={styles.container}>
      <ViewJurnalScroll />
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default TestingScreen;
