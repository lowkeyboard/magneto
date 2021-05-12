import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

export const Screen2 = () => {
  return (
    <ScrollView>
      <Text>Screen2 here</Text>
      <View>
        <Text>Some more text</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};
