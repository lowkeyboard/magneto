import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import analytics from '@react-native-firebase/analytics';

export const HomeScreen = props => {
  return (
    <ScrollView>
      <Text>HomeScreen</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Button
        title="Click to Make an Event"
        onPress={async () => await analytics().logEvent('12mayisEvent')}
      />
      <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text>go to profile screen.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('did_it_crash_screen')}>
        <Text>click to test crashlytics here.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
