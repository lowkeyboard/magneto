import React, {useRef} from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';
import TabNav from './TabNav';

const Stack = createStackNavigator();

export default function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
