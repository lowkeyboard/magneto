import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles/stylesLogin';
import auth from '@react-native-firebase/auth';

const LoginScreen = props => {
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const setMail = text => setUserEmail(text);
  const setPassword = text => setUserPassword(text);

  const loginUser = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);

      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid); //user's unique ID.
      Alert.alert('Welcome! Login Succesful.');
    } catch (error) {
      console.log(error);
      Alert.alert('Sorry, an error occured.');
    }
  };

  return (
    <SafeAreaView style={styles.LoginScreen.viewBackground}>
      <View style={styles.LoginScreen.viewPosition}>
        <TextInput
          style={styles.LoginScreen.textInputStyle}
          placeholder="e-mail.."
          placeholderTextColor="white"
          onChangeText={setMail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.LoginScreen.textInputStyle}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.LoginScreen.touchableStyle}
            onPress={loginUser}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.LoginScreen.touchableStyle}
            onPress={() => props.navigation.navigate('Register')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {LoginScreen};
