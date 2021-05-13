import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import {ForgotScreen} from '../auth/ForgotScreen';
import {LoginScreen} from '../auth/LoginScreen';
import {RegisterScreen} from '../auth/RegisterScreen';
import {HomeScreen} from '../main/HomeScreen';
import {ProfileScreen} from '../main/ProfileScreen';
import {SettingsScreen} from '../main/SettingsScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function did_it_crash_screen() {
  return (
    <View>
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </View>
  );
}

export async function onSignIn(user) {
  crashlytics().log('User signed in.');
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ]);
}

export function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default function MainNav({navigation}) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  if (initializing) return null;

  if (user) {
    return (
      <Stack.Navigator initialRouteName={did_it_crash_screen}>
        <Stack.Screen name="did_it_crash" component={did_it_crash_screen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
    </Stack.Navigator>
  );
}
