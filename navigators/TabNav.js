import React, {useEffect, useRef} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../pages/tabpages/Profile';
import Home from '../pages/tabpages/Home';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
