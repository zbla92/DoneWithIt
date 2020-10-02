import React from 'react';
import { StyleSheet, View } from 'react-native';

import ImageInput from './ImageInput';

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image}>
          <ImageInput
            imageUri={uri}
            onChangeImage={(uri) => onRemoveImage(uri)}
            key={uri}
          />
        </View>
      ))}
      <ImageInput picker onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  image: { marginRight: 10 },
});
