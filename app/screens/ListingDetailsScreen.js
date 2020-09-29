import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

import ListItem from "../components/ListItem";
import AppText from "../components/AppText";

export default function ({ title, price }) {
  return (
    <View style={styles.card}>
      <Image source={require("../assets/image1.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>
        <View style={styles.listItemWrap}>
          <ListItem
            image={{
              uri:
                "https://media-exp1.licdn.com/dms/image/C4D03AQEsD7vgguIQiA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=by96z2ce_owPOxcKit-Pc8HpY3AsqVjqnIUaHfKURpc",
            }}
            title="Milos Macura"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 15, backgroundColor: colors.white, overflow: "hidden" },
  image: { width: "100%", height: 200 },
  detailsContainer: { padding: 20 },
  title: { marginBottom: 7, fontWeight: "500", fontSize: 24 },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  listItemWrap: { marginVertical: 40 },
});
