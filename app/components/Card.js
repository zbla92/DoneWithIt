import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

import AppText from "./AppText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: { width: "100%", height: 200 },
  detailsContainer: { padding: 20 },
  title: { marginBottom: 7 },
  subtitle: { color: colors.secondary, fontWeight: "bold" },
});
