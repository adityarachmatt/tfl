import React, { useState } from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import EditBukuImageView from "./components/molecules/editBukuImageView";

const TestingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EditBukuImageView />
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default TestingScreen;
