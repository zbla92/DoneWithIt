import React from 'react';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableHighlight style={styles.btnDelete} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='delete' color='white' size={30} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
