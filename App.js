import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';

import MessageScreen from './app/screens/MessagesSceen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import colors from './app/config/colors';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppText from './app/components/AppText';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState(4);

  return (
    <Screen style={styles.container}>
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

      {/* <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      /> */}
      {/* <AppTextInput icon="email" placeholder="email" /> */}
      {/* <LoginScreen /> */}
      <ListingEditScreen />
      {/* <MessageScreen /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black, // temporary battery drain solution
  },
});
