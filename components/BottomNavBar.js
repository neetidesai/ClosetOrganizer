import React from 'react';
import { View } from 'react-native';
import AppStyles from '../styles/AppStyles';
import Login from '../screens/Login'
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';

export default function BottomNavBar({ }) {
    const navigation = useNavigation();

    return (
        
    <View style={AppStyles.bottomNavContainer}>
        <Stack direction="row" fill center spacing={70}>
            <IconButton 
            onPress={() => navigation.navigate("Home")}
            icon={props => <Icon name="home" size={50} />} 
            color="black"
            
            />

            <IconButton
            icon={props => <Icon name="camera" size={50} />}
            color="black"
            siz
            />

            <IconButton
            icon={props => <Icon name="hanger" size={50} />}
            color="black"
            />
        </Stack>
    </View>
    );
}

