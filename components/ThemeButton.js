// import React, { useState, useEffect } from 'react';
// import { ImageBackground, KeyboardAvoidingView, Text, View, Image, Pressable} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

//     <Pressable
//     style={({ pressed }) => (pressed ? [AppStyles.selectImage, {opacity: 0.6}] : AppStyles.selectImage)}
//     onPress={pickImage}>
//         <Text style={AppStyles.regularText}> Select Image </Text>
//     </Pressable>

import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import AppStyles from '../styles/AppStyles'

export default function ThemeButton(props) {

    return (
        <Pressable
        style={({ pressed }) => (pressed ? [AppStyles.themeButton, {opacity: 0.6}] : [AppStyles.themeButton])}
        onPress={props.onPress}>
            <Text style={AppStyles.regularText}> {props.text} </Text>
        </Pressable>
    )
}