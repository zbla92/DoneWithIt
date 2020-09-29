import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red Hat for sale",
    price: 100,
    image: require("../assets/image1.jpg"),
  },
  {
    id: 2,
    title: "Nissan GTR R34 for sale",
    price: 140000,
    image: {
      uri:
        "https://d3lp4xedbqa8a5.cloudfront.net/imagegen/cp/black/480/360/s3/digital-cougar-assets/tradeuniquecars/gallery1808/TOYBOX-R34-GTR-front-q.jpg",
    },
  },
  {
    id: 3,
    title: "Stolen Raptor Engine for sale",
    price: 76000,
    image: {
      uri:
        "https://cdn.mos.cms.futurecdn.net/VmPnoyzkPiscEeEF9cdjET-1200-80.jpg",
    },
  },
];

export default function () {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20, backgroundColor: colors.light },
});
