import React, { useState, useEffect } from 'react';
import { ImageBackground, KeyboardAvoidingView, Text, View, Image, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header'
import AppStyles from '../styles/AppStyles'
import ImageViewer from '../components/ImageViewer'
import BottomNavBar from '../components/BottomNavBar';
import SignUp from './SignUp';

export default function AddItem({ navigation }) {
    const background = require("../assets/background-img.jpg");
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    })

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            
        }
      };

    if (hasGalleryPermission === false){
        return <Text> No access to internal storage</Text>
    }

    return (
        <ImageBackground style ={AppStyles.container} source={background}> 
                
            <Header />
            
            <View style={{gap: 10}}>
                <View>
                    <ImageViewer
                    selectedImage={selectedImage}
                    />
                </View>
                
                <Pressable
                style={({ pressed }) => (pressed ? [AppStyles.selectImage, {opacity: 0.6}] : AppStyles.selectImage)}
                onPress={pickImage}>
                    <Text style={AppStyles.regularText}> Select Image </Text>
                </Pressable>

                <Pressable
                style={({ pressed }) => (pressed ? [AppStyles.selectImage, {opacity: 0.6}] : AppStyles.selectImage)}
                onPress={() => navigation.navigate("SignUp")}>
                    <Text style={AppStyles.regularText}> Use Image </Text>
                </Pressable>

            </View>

            <View style={AppStyles.bottomNavContainer}> 
                <BottomNavBar/>
            </View>

        </ImageBackground>
    )

}
      
      

      
