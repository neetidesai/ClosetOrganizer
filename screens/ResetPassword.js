import React, { useState } from 'react';
import { ImageBackground, Alert, View, StyleSheet, Image, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../styles/AppStyles'
import InlineTextButton from '../components/InlineTextButton';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase'



export default function ResetPassword({ navigation }) {
  const background = require("../assets/background-img.jpg");

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        console.log(email)
        setErrorMessage(error.message);
      });
  }
  return (
    <ImageBackground style ={AppStyles.container} source={background}> 
      <View style={AppStyles.headerContainer}>
        <Text style={AppStyles.header}>Rewear</Text>
      </View>
      
      <KeyboardAvoidingView 
        style ={AppStyles.resetPasswordContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View>
          <Text style={AppStyles.headerText}>Reset Password</Text>
          <Text style={AppStyles.errorText}> { errorMessage } </Text>
          <TextInput
              style={AppStyles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={'Email'}
              keyboardType="email-address"/>

          <View style={[AppStyles.inlineTextButtonContainer, {justifyContent: 'space-between'}]}>
              <InlineTextButton text="Go back to login" onPress={() => navigation.navigate("Login")}/>
          </View>
          
          <Pressable
          style={({ pressed }) => (pressed ? [AppStyles.createAccount, {opacity: 0.6}] : AppStyles.createAccount)}
          onPress={resetPassword}>
              <Text style={AppStyles.regularText}> Reset Password </Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


