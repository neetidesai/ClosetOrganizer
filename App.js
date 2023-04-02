import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppStyles from './styles/AppStyles'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import ResetPassword from './screens/ResetPassword'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const background = require("./assets/background-img.jpg");
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
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
      </Stack.Navigator>
    </NavigationContainer>




  );
}


