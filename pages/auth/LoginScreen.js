import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoToButton from '../../App';
export default function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>

      <GoToButton screenName="LoginScreen" />
    </View>
  );
}
