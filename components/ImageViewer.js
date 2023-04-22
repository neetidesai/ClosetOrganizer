import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import AppStyles from '../styles/AppStyles'

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage !== null
      ? { uri: selectedImage }
      : placeholderImageSource;
  
    return <Image style={AppStyles.clothingItem} source={imageSource}/>;
  }