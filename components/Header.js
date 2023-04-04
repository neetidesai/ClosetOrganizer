import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import AppStyles from '../styles/AppStyles'

export default function Header({ navigation }) {
    return (
        <ImageBackground style ={AppStyles.container} source={background}>
        <View style={AppStyles.headerContainer}>
          {/*  put in authentiction, can only navigate if logged in */}
          <Pressable onPress={navigation.navigate('Home')}> 
            <Text style={AppStyles.header}>Rewear</Text>
          </Pressable>
        </View>

        </ImageBackground>
    )
}