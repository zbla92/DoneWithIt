import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

import Screen from '../components/Screen';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [image, setImage] = useState(null);

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert('Bruh enable that shit, I aint looking your small dick pics.');
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) setImage(result.uri);
  };

  useEffect(() => {
    requestPermission();
  }, []);
  console.log(image, ' image');
  return (
    <Screen style={styles.container}>
      <Button title='Select an image' onPress={selectImage} />
      <Image style={styles.image} source={{ uri: image }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black, // temporary battery drain solution
  },
  image: { width: '100%', height: '100%' },
});
