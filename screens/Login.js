import React, { useState } from 'react';
import { ImageBackground, Alert, View, StyleSheet, Image, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../styles/AppStyles'
import InlineTextButton from '../components/InlineTextButton';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, currentUser } from '../firebase'
import Header from '../components/Header'
export default function Login({ navigation }) {
  const background = require("../assets/background-img.jpg");
 
  if (auth.currentUser) {
    navigation.navigate('SignUp');
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('SignUp');
      }
    });
  }
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("SignUp", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  }

  return (
    <ImageBackground style ={AppStyles.container} source={background}> 
      
      <Header />
      
      <KeyboardAvoidingView 
        style ={AppStyles.loginContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View>
          <Text style={AppStyles.headerText}>Login</Text>
          <Text style={AppStyles.errorText}> { errorMessage } </Text>
          <TextInput
              style={AppStyles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={'Email'}
              keyboardType="email-address"/>

          <TextInput
              style={AppStyles.input}
              value={password}
              onChangeText={setPassword}
              placeholder={'Password'}
              secureTextEntry={true}/>

          <View style={[AppStyles.inlineTextButtonContainer, {justifyContent: 'space-between'}]}>
              <InlineTextButton text="Create account" onPress={() => navigation.navigate("SignUp")}/>
              <InlineTextButton text="Forgot password?" onPress={() => navigation.navigate("ResetPassword")}/>
          </View>
          
          <Pressable
          style={({ pressed }) => (pressed ? [AppStyles.login, {opacity: 0.6}] : AppStyles.login)}
          onPress={ login }>
              <Text style={AppStyles.regularText}> Login </Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


