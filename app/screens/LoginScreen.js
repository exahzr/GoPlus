import React, { Component, useState } from "react";
import { StyleSheet, Image, ScrollView,View ,Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import { firebase } from '../src/firebase/config';
import routes from "../navigation/routes";
import colors from "../config/colors";
import navigationTheme from "../navigation/navigationTheme";



export class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
    }

    this.onSignUp = this.onSignUp.bind(this)
}

onSignUp() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
          const uid = result.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                       
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

render(){
    return (
    <Screen style={styles.container} >
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={() => this.onSignUp()}
        
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    
    </Screen>  );
    
}
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
},
footerText: {
    fontSize: 16,
    color: '#2e2e2d'
},
footerLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
},
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
