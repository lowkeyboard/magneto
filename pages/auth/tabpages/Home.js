import React, {useEffect, useRef} from 'react';

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
