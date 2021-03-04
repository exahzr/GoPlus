import React from "react";
import { View, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;


  return (
    <ScrollView>
      <SafeAreaView>
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.place}>{listing.place}</Text>
        <View style={styles.container}>
        <MaterialCommunityIcons
          name="account-plus"
          color={colors.white}
          size={40}
        />
      </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/123.jpg")}
            title="Hasan Isahu"
            subTitle="5 Events"
          />
        </View>
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 1,
    bottom: 80,
    left: 250,
    height: 55,
    justifyContent: "center",
    width: 55,
    
  },
  image: {
    width: "100%",
    height: 300,
  },
  place: {
   
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
