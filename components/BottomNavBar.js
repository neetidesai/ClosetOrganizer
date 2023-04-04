import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import AppStyles from '../styles/AppStyles'
import IconButton from '@mui/material/IconButton';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HomeIcon from '@mui/icons-material/Home';

export default function BottomNavBar({ navigation }) {
    return (
        
        <View style={AppStyles.bottomNavContainer}>

          <IconButton onClick={navigation.navigate('ViewCloset')}> 
            <HomeIcon />
          </IconButton>

          <IconButton onClick={navigation.navigate('AddItem')}> 
            <CameraAltIcon />
          </IconButton>

          <IconButton onClick={navigation.navigate('BuildOutfit')}> 
            <CheckroomIcon />
          </IconButton>
          ;
        </View>
    )
}