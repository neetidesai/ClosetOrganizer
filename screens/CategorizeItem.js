import React, { useState, useEffect } from 'react';
import { ImageBackground, Alert, Text, TextInput, View, Image, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header'
import AppStyles from '../styles/AppStyles'
import ImageViewer from '../components/ImageViewer'
import BottomNavBar from '../components/BottomNavBar';
import DropDown from 'react-native-multi-level-selector';
import { PaperProvider } from 'react-native-paper';
import CategoryDisplay from '../components/CategoryDisplay';
import ColorDisplay from '../components/ColorSelector';
import ThemeButton from '../components/ThemeButton';

export default function CategorizeItem({ navigation, route}) {
    const background = require("../assets/background-img.jpg");
    const { selectedImage } = route.params;

    const catDisplay = <CategoryDisplay style={AppStyles.categorizeDropdown} title='Select Category' 
                
    items={[['Top', 'T-Shirt', 'Tank Top', 'Blouse', 'Sweater'], 
    ['Bottom', 'Jeans', 'Trousers', 'Shorts', 'Skirt'], 
    ['Dress', 'Mini', 'Midi', 'Maxi'],
    ['Shoes', 'Sneakers', 'Flip Flops', 'Boots', 'Sandals', 'Heels'],
    ['Accessories', 'Purse', 'Jewelry', 'Scarf', 'Hat', 'Sunglasses', 'Other']]}
    
    zIndex={10000}
    />

    const colorDisplay = <ColorDisplay style={AppStyles.categorizeDropdown} title='Select Color' 
                
    items={['Black', 'White', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink']}

    zIndex={50}
    />

    const [description, setDescription] = React.useState('');
    const [brand, setBrand] = React.useState('');

    itemDescription = <TextInput
        style={AppStyles.categorizeTextbox}
        value={description}
        onChangeText={setDescription}
        placeholder={'Item description*'}
        maxLength={200}/>
    
    itemBrand = <TextInput
        style={AppStyles.categorizeTextbox}
        onChangeText={setBrand}
        value={brand}
        placeholder={'Brand*'}
        maxLength={50}/>

    return (
        <ImageBackground style ={AppStyles.container} source={background}> 
                
            <Header />
            
            <View style={{flex: 1, justifyContent: 'center', gap: 10}}>

                <ImageViewer selectedImage={selectedImage}/>

                <View>
                    {itemDescription}
                        <Text style={AppStyles.charCount}>
                            {description.length}/200
                        </Text>
                    {itemBrand}
                        <Text style={AppStyles.charCount}>
                            {brand.length}/100
                        </Text>
                </View>

                {catDisplay}
                {colorDisplay}
                
                <View style={[AppStyles.inlineTextButtonContainer, {justifyContent: 'space-between', margin: 20}]}>
                    <ThemeButton text="Back" onPress={() => navigation.navigate("AddItem")}/>
                    <ThemeButton text="Ok" onPress={() => ( 
                        (catDisplay.itemValue != null) && (colorDisplay.itemValue != null) && (brand != '') && (description != '') ? 
                        navigation.navigate("AddItem") : 
                        Alert.alert('Select Categories', 'Input item description/brand and select clothing category and color before continuing.'))}/>
                </View>
                
            
            </View>
            

            <View style={AppStyles.bottomNavContainer}> 
                <BottomNavBar/>
            </View>

        </ImageBackground>
    )

}
      
      

      
