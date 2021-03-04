import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import PlacePickerItem from "../components/PlacePickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  place: Yup.string().required().min(1).max(10000).label("Place"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});



const categories = [
  {
    backgroundColor: "#000",
    icon: "hiking",
    label: "Hiking",
    value: 1,
  },
  {
    backgroundColor: "#000",
    icon: "party-popper",
    label: "Party",
    value: 2,
  },
  {
    backgroundColor: "#000",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#000",
    icon: "dog-side",
    label: "Walking Dog",
    value: 4,
  },
  {
    backgroundColor: "#000",
    icon: "soccer",
    label: "Football",
    value: 5,
  },
  {
    backgroundColor: "#000",
    icon: "basketball",
    label: "Basketball",
    value: 6,
  },
  {
    backgroundColor: "#000",
    icon: "movie",
    label: "Movies",
    value: 7,
  },
  {
    backgroundColor: "#000",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
const places = [
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Prishtine",
    value: 1,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Prizren",
    value: 2,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Ferizaj",
    value: 3,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Gjakove",
    value: 4,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Peje",
    value: 5,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Tirane",
    value: 6,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Durres",
    value: 7,
  },
  {
    backgroundColor: "#000",
    icon: "star",
    label: "Presheve",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "star",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <ScrollView  keyboardShouldPersistTaps="never">
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          place: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        
       
       
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <Picker
          items={places}
          name="place"
          numberOfColumns={3}
          PickerItemComponent={PlacePickerItem}
          placeholder="Places"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
