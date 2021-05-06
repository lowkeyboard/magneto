import React, {useEffect, useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import analytics from '@react-native-firebase/analytics';
import firebase from '@react-native-firebase/app';

import {TouchableOpacity, View} from 'react-native';

import Profile from '../pages/auth/tabpages/Profile';
import Home from '../pages/auth/tabpages/Home';

const Tab = createBottomTabNavigator();

export function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
