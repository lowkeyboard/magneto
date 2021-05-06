/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef} from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {TabNav} from './navigators/TabNav';

const Stack = createStackNavigator();

export function getActiveRouteName(state: any): any {
  const route = state.routes[state.index];

  // resolve nested navigators recursivly
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
}

const App = () => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);
        if (previousRouteName !== currentRouteName) {
          analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
      }}>
      <Stack.Navigator initialRouteName="TabNav">
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#A52A2A',
    padding: 20,
  },

  button2: {
    alignItems: 'center',
    backgroundColor: '#5F9EA0',
  },
});
