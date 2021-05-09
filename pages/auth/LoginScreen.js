import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>Go to register from LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
}
