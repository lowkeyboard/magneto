import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import firebase from '@react-native-firebase/app';
import {TouchableOpacity, View, Text} from 'react-native';

export default function Home({navigation}) {
  useEffect(
    () => navigation.addListener('focus', () => alert('Screen was focused')),
    [],
  );

  return (
    <View>
      <Text>home screen</Text>
    </View>
  );
}
