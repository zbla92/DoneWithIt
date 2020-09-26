import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function () {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
});
