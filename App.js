import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppStyles from './styles/AppStyles'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import AddItem from './screens/AddItem'
import CategorizeItem from './screens/CategorizeItem'
import ResetPassword from './screens/ResetPassword'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const background = require("./assets/background-img.jpg");
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddItem">
        {/* <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}/>

        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}/>

        <Stack.Screen 
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}/>

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{headerShown: false}}/> */}

        <Stack.Screen 
          name="AddItem"
          component={AddItem}
          options={{headerShown: false}}/>

        <Stack.Screen 
          name="CategorizeItem"
          component={CategorizeItem}
          options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>




  );
}


