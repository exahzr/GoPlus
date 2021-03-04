import React, { useState, Component } from "react";
import { ScrollView, StyleSheet, View,Text } from "react-native";
import * as Yup from "yup";
import { firebase } from '../src/firebase/config';

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import routes from "../navigation/routes";



export class RegisterScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
          email: '',
          password: '',
          name: ''
      }

      this.onSignUp = this.onSignUp.bind(this)
  }

  onSignUp() {
      const { email, password, name } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((result) => {
            const uid = result.user.uid
                const data = {
                    id: uid,
                    email,
                    name,
                };
            
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .catch((error) => {
                      alert(error)
                  });
          })
          .catch((error) => {
              alert(error)
      });
  }

  render() { return (
  
      <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={this.onSignUp}
        
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          onChangeText={(name) => this.setState({ name })}
          placeholder="Name"
        />
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
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
      
    </Screen>

  );
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
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
}
});

export default RegisterScreen;
