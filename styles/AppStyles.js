import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { fontFamily } from '@mui/system';

const color_green = '#7AA28D';
const color_purple = '#590A41';
const color_cream = '#ECE9D8';
const color_black = '#000000'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: {color_cream},
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      },

      headerContainer: {
        flex: 0.1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: color_cream + '90',
        paddingTop: 50,
        position: 'absolute',
        top: 0,
        width: '100%'
      },

      header: {
        color: color_black,
        fontSize: 40
      },

      loginContainer: {
        flex: 0.35,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: color_cream,
        padding: 10
      },

      login: {
        padding: 5,
        backgroundColor: color_green,
        borderColor: color_cream,
        borderWidth: 2,
        width: 80,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center'
      },

      createAccount: {
        padding: 5,
        backgroundColor: color_green,
        borderColor: color_cream,
        borderWidth: 2,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center',
      },

      createAccountContainer: {
        flex: 0.4,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: color_cream,
        padding: 10
      },

      resetPsswordContainer: {
        flex: 0.4,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: color_cream,
        padding: 10
      },

      regularText: {
        fontSize: 20,
        color: color_black
      },

      headerText: {
        textAlign: 'center',
        fontSize: 30,
        color: color_black
      },

      input: {
        height: 40, 
        margin: 12, 
        borderWidth: 2, 
        padding: 10, 
        fontSize: 16, 
        borderColor: color_green, 
        backgroundColor: color_green, 
        flexDirection: 'row', 
        width: 350,
        
      },

      inlineTextButtonContainer: {
        fontSize: 15,
        color: color_black,
        paddingBottom: 30,
        justifyContent: 'center',
        flexDirection: 'row',
      },

      inlineTextButton: {
        fontSize: 13,
        color: color_black,
      },

      pressedInlineTextButton: {
        opacity: 0.6
      },

      errorText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red'
      },


});