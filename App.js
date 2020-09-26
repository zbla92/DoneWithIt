import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import MessageScreen from "./app/screens/MessagesSceen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import colors from "./app/config/colors";
import AccountScreen from "./app/components/AccountScreen";
import ListingsScreen from "./app/components/ListingsScreen";

export default function App() {
  const [activeScreen, setActiveScreen] = useState(4);
  return (
    <View style={styles.container}>
      {/* {activeScreen === 1 && (
        <WelcomeScreen viewImagePage={() => setActiveScreen(2)} />
      )}
      {activeScreen === 2 && (
        <ViewImageScreen viewImagePage={() => setActiveScreen(1)} />
      )}
      {activeScreen == 3 && (
        <ListingDetailsScreen title="Some cocaine " price={100} />
      )}
      {activeScreen == 4 && <MessageScreen title="Some cocaine " price={100} />} */}
      <ListingsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black, // temporary battery drain solution
  },
});
