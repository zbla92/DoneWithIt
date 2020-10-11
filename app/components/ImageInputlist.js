import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ImageInput from './ImageInput';

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollToView = useRef(null);

  useEffect(() => {
    scrollToView?.current.scrollToEnd({ animated: true });
  }, [imageUris]);

  return (
    <ScrollView horizontal ref={scrollToView} style={styles.scrolltener}>
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View style={styles.image} key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={(uri) => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput picker onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrolltener: { maxHeight: 120 },
  container: { flexDirection: 'row' },
  image: { marginRight: 10 },
});
