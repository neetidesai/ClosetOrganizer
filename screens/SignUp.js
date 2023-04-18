import React, { useState } from 'react';
import { ImageBackground, Alert, View, StyleSheet, Image, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../styles/AppStyles'
import InlineTextButton from '../components/InlineTextButton';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase'
import Header from '../components/Header';

export default function SignUp({ navigation }) {
  const background = require("../assets/background-img.jpg");

  const [email, onChangeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
        setValidationMessage("Passwords do not match.");
    } else {
        setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser);
        navigation.navigate("Login", { user: userCredential.user });
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

  return (
    <ImageBackground style ={AppStyles.container} source={background}> 
      
      <Header />

      <KeyboardAvoidingView 
        style ={AppStyles.createAccountContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View>
          <Text style={AppStyles.headerText}>Create Account</Text>
          <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
          <TextInput
              style={AppStyles.input}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={'Email'}
              keyboardType="email-address"/>

          <TextInput
              style={AppStyles.input}
              value={password}
              onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
              placeholder={'Password'}
              secureTextEntry={true}/>

            <TextInput
              style={AppStyles.input}
              value={confirmPassword}
              onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
              placeholder={'Confirm Password'}
              secureTextEntry={true}/>

          <View style={[AppStyles.inlineTextButtonContainer, {justifyContent: 'left'}]}>
              <InlineTextButton text="Already have an account?" onPress={() => navigation.navigate("Login")}/>
          </View>
          
          <Pressable
          style={({ pressed }) => (pressed ? [AppStyles.createAccount, {opacity: 0.6}] : AppStyles.createAccount)}
          onPress={signUp}>
              <Text style={AppStyles.regularText}> Create Account </Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


