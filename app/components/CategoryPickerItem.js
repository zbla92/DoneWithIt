import React from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from './Icon';
import ListItemDeleteAction from './ListItemDeleteAction';
import AppText from './AppText';

export default function ({ item, onPress }) {
  console.log(item, 'item');
  return (
    <View style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item?.icon || ''}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33.3%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
