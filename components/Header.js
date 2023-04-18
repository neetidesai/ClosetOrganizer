import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import AppStyles from '../styles/AppStyles'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
    return (
      <View style={AppStyles.headerContainer}>
        {/*  put in authentiction, can only navigate if logged in */}
        <Pressable onPress={navigation.navigate('Home')}> 
          <Text style={AppStyles.header}>rewear</Text>
        </Pressable>
      </View>
    )
}