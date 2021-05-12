import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styles/stylesRegister';
import {errorResolve} from '../helpers/errorFunction';

const RegisterScreen = props => {
  const [usermail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordRep, setUserPasswordRep] = useState('');

  const mail = text => setUserMail(text);
  const password = text => setUserPassword(text);
  const passwordRep = text => setUserPasswordRep(text);

  const signUser = async () => {
    if (userPassword === userPasswordRep) {
      try {
        await auth().createUserWithEmailAndPassword(usermail, userPassword);
        Alert.alert('Welcome!', 'Your user registration is success complete.');
        props.navigation.goBack();
      } catch (error) {
        console.log(error);
        Alert.alert('Sorry..', errorResolve(error.code));
      }
    } else Alert.alert('Sorry..', 'Passwords error!');
  };

  const goBackPage = () => {
    props.navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.RegisterScreen.viewBackground}>
      <View style={styles.RegisterScreen.viewPosition}>
        <TextInput
          style={styles.RegisterScreen.textInputStyle}
          placeholder="e-mail.."
          placeholderTextColor="white"
          onChangeText={mail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.RegisterScreen.textInputStyle}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={password}
          secureTextEntry
        />

        <TextInput
          style={styles.RegisterScreen.textInputStyle}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          onChangeText={passwordRep}
          secureTextEntry
        />

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.RegisterScreen.touchableStyle}
            onPress={signUser}>
            <Text>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.RegisterScreen.touchableStyle}
            onPress={goBackPage}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {RegisterScreen};
