import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

import AppButton from "../components/AppButton";

const image = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen({ viewImagePage }) {
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagline}>Sell drugs online</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Sign In"
          onPress={() => console.log("signing button tapped bruh")}
        />
        <AppButton
          title="Gallery View"
          onPress={viewImagePage}
          style={{ backgroundColor: colors.secondary }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logo: { width: 100, height: 100 },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: { width: "100%", padding: 20 },
  tagline: { fontSize: 25, fontWeight: "600", paddingVertical: 20 },
});
