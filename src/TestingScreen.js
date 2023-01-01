import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ViewPage from "./pages/view/ViewPage";

const TestingScreen = () => {
  return (
    <View style={styles.container}>
      <ViewPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default TestingScreen;
