import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";

import colors from "../config/colors";

const image = require("../assets/chair.jpg");

export default function ViewImageScreen({ viewImagePage }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={viewImagePage}
        style={[styles.buttonBox, styles.btnLeft]}
      >
        <Text>X</Text>
      </TouchableHighlight>
      <View style={[styles.buttonBox, styles.btnRight]}></View>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "black", flex: 1 },
  image: { width: "100%", height: "100%" },

  buttonBox: { width: 50, height: 50, zIndex: 1 },
  btnLeft: {
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  btnRight: {
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
