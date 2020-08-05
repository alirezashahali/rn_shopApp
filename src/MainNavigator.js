import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import ShopScreen from './sreens/ShopScreen'

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Shop">
            <Drawer.Screen name="Shop" component={ShopScreen} />
        </Drawer.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}