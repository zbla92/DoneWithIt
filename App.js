import React from 'react';
import { StyleSheet } from 'react-native';

import colors from './app/config/colors';

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

import Test from './app/test/Test';

export default function App() {
  return (
    <Screen style={styles.container}>
      {/* <LoginScreen /> */}
      <Test />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black, // temporary battery drain solution
  },
});
