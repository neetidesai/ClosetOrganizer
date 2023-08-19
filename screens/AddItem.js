import React, { useState, useEffect } from 'react';
import { ImageBackground, Alert, Text, View, Image, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header'
import AppStyles from '../styles/AppStyles'
import ImageViewer from '../components/ImageViewer'
import BottomNavBar from '../components/BottomNavBar';
import CategorizeItem from './CategorizeItem';
import ThemeButton from '../components/ThemeButton';

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
                
            <Header/>
            
            <View style={{flex: 1, justifyContent: 'center', gap: 10, flexDirection: 'column'}}>
                <ImageViewer selectedImage={selectedImage}/>
    
                <ThemeButton text='Select Image' onPress={pickImage}/>
                <ThemeButton text='Ok' onPress={() => (selectedImage != null ?
                    navigation.navigate("CategorizeItem", {selectedImage: selectedImage}) : Alert.alert('Select Image', 'Select image before continuing.'))}/>
            </View>

            <BottomNavBar/>
        </ImageBackground>
    )

    function validateInput() {
    
        if(selectedImage != null)
            return true
        else
            return false 
      };

}
      
      

      
