import React, { useState } from 'react';
import { ImageBackground, View, StyleSheet, Image, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import AppStyles from '../styles/AppStyles'
import InlineTextButton from '../components/InlineTextButton';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, currentUser } from '../firebase'
import BottomNavBar from '../components/BottomNavBar';
import Header from '../components/Header'
// burger nav icon on top right
export default function Home({ navigation }) {
  const background = require("../assets/background-img.jpg");
 

  return (
    <ImageBackground style ={AppStyles.container} source={background}> 
      
      <Header />
      
      <View style={AppStyles.bottomNavContainer}> 
        <BottomNavBar/> 
      </View>
        
        
    </ImageBackground>
  );
}


