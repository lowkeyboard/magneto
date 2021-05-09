import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import AppNav from './navigators/AppNavigator';

const App = () => {
  return <AppNav />;
};

export default App;
