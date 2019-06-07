import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native'
import logo from '../static/logo_signup.png'
import backgroundImage from '../static/background_login.png'

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent: "center",
    },
    logo: {
        height:45,
        width:226,
        padding:0,
        top:-150,
        left:85,
    }
});

export default class LoginPage extends Component {
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.body}>
                <Image style={styles.logo} source={logo}></Image>
            </ImageBackground>
        );
    }
}