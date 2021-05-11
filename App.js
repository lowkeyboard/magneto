import React, {useRef, useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Input} from 'react-native';

import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

function GoToButton({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="TabScreen1">
      <Tab.Screen name="TabScreen1" component={TabScreen1} />
      <Tab.Screen name="TabScreen2" component={TabScreen2} />
    </Tab.Navigator>
  );
}
function TabScreen1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <GoToButton screenName="authScreen" />
      <Text>This is tab Screen1</Text>
      <Button
        onPress={() => navigation.navigate('TabScreen2')}
        title="Go to blabla"
      />
    </View>
  );
}

function TabScreen2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('TabScreen1')}
        title="Go to notifications"
      />
    </View>
  );
}

function authScreen({navigation}) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //if not
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    console.log(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  if (initializing) return null;

  if (!user) {
    console.log(user);

    return (
      <View>
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input label="passw" value={passw} onChangeText={setPassw} />
        <Button
          title="SignUp"
          onPress={(email, passw) =>
            createUserWithEmailAndPassword(email, passw)
          }
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome {user.email}</Text>
      <Text>this is auth</Text>
      <GoToButton screenName="HomeScreen" />
    </View>
  );
}

export function getActiveRouteName(state: any): any {
  const route = state.routes[state.index];

  // resolve nested navigators recursivly
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
}

const Stack = createStackNavigator();

function App({navigation}) {
  const routeNameRef = useRef(null);

  return (
    <NavigationContainer
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);
        if (previousRouteName !== currentRouteName) {
          analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
      }}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="authScreen" component={authScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    textAlign: 'center',
    marginTop: 20,
    flexDirection: 'column',
    alignSelf: 'center',

    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    // marginRight: 24,
    //marginLeft: 24,
    // marginBottom: 25,
    width: 327,
    height: 48,
  },
  text0: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 30,
    fontWeight: 'bold',
  },

  button: {
    flexDirection: 'column',
    alignSelf: 'center',
    margin: 15,
    backgroundColor: '#2D9CDB',
    padding: 10,
    borderRadius: 16,
    width: 150,
    width: 327,
    height: 48,
  },
});
