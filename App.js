import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <View style={styles.container}>
      {activeScreen === 1 && (
        <WelcomeScreen viewImagePage={() => setActiveScreen(2)} />
      )}
      {activeScreen === 2 && (
        <ViewImageScreen viewImagePage={() => setActiveScreen(1)} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
