import React, { useState } from 'react';
import { ImageBackground, View, StyleSheet, Image, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../styles/AppStyles'
import InlineTextButton from '../components/InlineTextButton';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, currentUser } from '../firebase'

// burger nav icon on top right
export default function Home({ navigation }) {
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

  return (
    <ImageBackground style ={AppStyles.container} source={background}> 
      <View style={AppStyles.headerContainer}>
        <Text style={AppStyles.header}>Rewear</Text>
      </View>
      
      <KeyboardAvoidingView 
        style ={AppStyles.loginContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View>
          <Text style={AppStyles.headerText}>Login</Text>

          <View style={[AppStyles.inlineTextButtonContainer, {justifyContent: 'space-between'}]}>
              <InlineTextButton text="Create account" onPress={() => navigation.navigate("SignUp")}/>
              <InlineTextButton text="Forgot password?" onPress={() => navigation.navigate("ResetPassword")}/>
          </View>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


