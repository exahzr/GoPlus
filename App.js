import React, { useEffect, useState,Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { View, Text } from 'react-native';

import AuthNavigator from "./app/navigation/AuthNavigator";
import { createStackNavigator } from '@react-navigation/stack'
import { firebase } from './app/src/firebase/config';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <>
        </>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer theme={navigationTheme}>
         <AuthNavigator />
        </NavigationContainer>
      );
    }

    return (
      
        <NavigationContainer theme={navigationTheme} >
          <AppNavigator />
        </NavigationContainer>
    )
      
  }
}

export default App