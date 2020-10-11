import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

import Screen from '../components/Screen';

import ImageInput from '../components/ImageInput';
import ImageInputList from '../components/ImageInputlist';
import ListingEditScreen from '../screens/ListingEditScreen';

export default function Test() {
  const [images, setImages] = useState([]);

  return (
    <Screen style={styles.container}>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black, // temporary battery drain solution
  },
  image: { width: '100%', height: '100%' },
});
