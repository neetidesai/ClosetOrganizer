import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import AppStyles from '../styles/AppStyles'

export default function ImageViewer({ selectedImage }) {
    const imageSource = selectedImage !== null
      ? { uri: selectedImage }
      : '/Users/neeti/Desktop/React-Native/ClosetOrganizer/assets/black_screen.jpeg';
  
    return <Image 
    style={AppStyles.clothingItem} 
    source={imageSource}/>;
  }