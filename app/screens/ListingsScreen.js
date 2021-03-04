import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Icon from "../components/Icon";

const listings = [
  {
    id: 1,
    title: "Shetitje ne Natyre",
    place: "Te Livadhi Shehit",
    image: require("../assets/ErzaIgotchYourBack.jpg"),
  },
  {
    id: 2,
    title: "Party ",
    place: "Prizren",
    image: require("../assets/1122.jpg"),
  },
  {
    id: 3,
    title: "House Party",
    place: "Prishtine",
    image: require("../assets/127026.jpg"),
  },
  {
    id: 4,
    title: "House Party",
    place: "Prishtine",
    image: require("../assets/127026.jpg"),
  },
  {
    id: 5,
    title: "House Party",
    place: "Prishtine",
    image: require("../assets/127026.jpg"),
  },
  {
    id: 6,
    title: "House Party",
    place: "Prishtine",
    image: require("../assets/127026.jpg"),
  },
  {
    id: 7,
    title: "House Party",
    place: "Prishtine",
    image: require("../assets/127026.jpg"),
  },
];



function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.place}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
