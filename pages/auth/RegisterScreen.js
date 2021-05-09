import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default function RegisterScreen({navigation}) {
  return (
    <View>
      <Text>Go to login from RegisterScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
}
