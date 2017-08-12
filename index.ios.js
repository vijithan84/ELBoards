/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View 
} from 'react-native';
import FireBase from './FireBaseConfig';

export default class ELBoards extends Component {
  render() {
   console.disableYellowBox = true;
    return <FireBase/>;
         
  }
}

AppRegistry.registerComponent('ELBoards', () => ELBoards);
