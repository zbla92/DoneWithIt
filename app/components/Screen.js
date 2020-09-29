import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export default function ({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.view]}>{children}</View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,

    flex: 1,
  },
  view: { flex: 1 },
});
