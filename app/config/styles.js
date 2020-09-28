import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
    width: "100%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
