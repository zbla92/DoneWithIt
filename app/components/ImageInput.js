import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Icon from '../components/Icon';
import colors from '../config/colors';

export default function ImageInput({ picker, imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert('Bruh enable that shit, I aint looking your small dick pics.');
  };

  const handlePress = (uri) => {
    if (picker) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete the image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(uri),
        },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.cancelled) onChangeImage(result.uri);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => handlePress(imageUri)}
      style={styles.container}
    >
      {picker ? (
        <Icon
          name='camera'
          size={100}
          iconColor={colors.danger}
          backgroundColor='transparent'
        />
      ) : (
        <Image style={styles.image} source={{ uri: imageUri }} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: '100%', height: '100%' },
});

ImageInput.defaultProps = {};
