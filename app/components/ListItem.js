import React from "react";
import { TouchableHighlight, View, StyleSheet, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

import AppText from "./AppText";

export default function ListItems({
  image,
  IconComponent,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: { borderRadius: 35, height: 70, width: 70 },
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
  title: { fontWeight: "bold" },
  subtitle: { color: colors.medium, paddingRight: 70 },
});

ListItems.defaultProps = {
  onPress: () => console.log("boo ya madafaka"),
};
