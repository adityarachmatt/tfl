import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import AddJurnalModule from "./pages/add/AddJurnalModule";

const TestingScreen = () => {
  return (
    <View style={styles.container}>
      <AddJurnalModule />
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default TestingScreen;
