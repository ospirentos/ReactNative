import React, {Component} from 'react'
import { Keyboard ,Text, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import hash from 'hash.js';
import backgroundImage from '../static/background_login.png'

const styles = StyleSheet.create({
    body: {
        flex:1,
        justifyContent: "center",
    },
    loginFormNoSoftKeyboard: {
        width:270,
        height:230,
        top:30,
        left:70,
    },
    loginFormSoftKeyboard: {
        width:270,
        height:230,
        top:30,
        left:70,
        paddingBottom:320
    },
    input: {
        height: 35,
        borderColor: "white",
        borderWidth: 1,
        padding:0,
        paddingLeft:5,
        backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    submitButton: {
        backgroundColor: "#1ab7f1",
        width:90,
        height:30,
        marginLeft:90,
        marginTop:15,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textLabel: {
        fontSize: 20,
        color: "#f4f9fc"
        
    },
    textFoot: {
        fontSize: 15,
        top:15,
        left: 5,
    },
    logo: {
        padding:0,
        top:-20,
        left:65,
        height:106,
        width:278
    }
});

export default class LoginPage extends Component {
    
}