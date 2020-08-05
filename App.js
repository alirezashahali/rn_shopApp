import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/MainNavigator'
import { enableScreens } from 'react-native-screens'

enableScreens()

export default function App() {
  return (
    <MainNavigator />
  );
}

