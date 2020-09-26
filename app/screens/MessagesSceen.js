import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

// Rem later
import Icon from "../components/Icon";
// rem til here

const initialMessages = [
  {
    id: 1,
    title: "Milos Macura",
    description:
      "Ja sam zavrsio svoje taskove na sales forceu, msm da cu malo sad raditi na nexusu.",
    image: {
      uri:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEsD7vgguIQiA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=by96z2ce_owPOxcKit-Pc8HpY3AsqVjqnIUaHfKURpc",
    },
  },
  {
    id: 2,
    title: "Milan Blaz",
    description:
      "U kurac, nismo deliverovali sve na vrijeme, potrudicemo se vise. ma da smo dali vec maksimum.",
    image: {
      uri:
        "https://avatars2.githubusercontent.com/u/34164504?s=460&u=759fbffbe4782d914a6014855e7e8a5034230960&v=4",
    },
  },
  {
    id: 3,
    title: "Brad Pitt",
    description: "Wait, what is this about?",
    image: {
      uri:
        "https://pyxis.nymag.com/v1/imgs/e9f/d4e/c597464e07cff19c61fdde524bec712db4-brad-pitt.rsquare.w330.jpg",
    },
  },
  {
    id: 4,
    title: "Michael Baum",
    description:
      "People, we need to redesign redesigned disagn that we previously redesigned from the redesigned redesignes of the original design",
    image: {
      uri:
        "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1407389874/irhavgsgvpefscqizqo4.jpg",
    },
  },
];

export default function ({}) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from the messages array
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
      <ListItem
        title="Bang"
        subtitle="Cock"
        IconComponent={
          <Icon iconColor="white" backgroundColor="red" name="email" />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
