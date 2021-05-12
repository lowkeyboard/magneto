import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Screen1} from '../tabs/Screen1';
import {Screen2} from '../tabs/Screen2';

const Tab = createBottomTabNavigator();

export const ProfileScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
};
