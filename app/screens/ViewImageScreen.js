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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItemDeleteAction from "../components/ListItemDeleteAction";

import colors from "../config/colors";

const image = require("../assets/chair.jpg");

export default function ViewImageScreen({ viewImagePage }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={viewImagePage} style={styles.btnClose}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.btnDelete}>
        <MaterialCommunityIcons name="delete" color="white" size={30} />
      </TouchableHighlight>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "black", flex: 1 },
  image: { width: "100%", height: "100%" },
  btnClose: {
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 2,
  },
  btnDelete: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
