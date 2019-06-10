import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import logo from '../static/logo_signup.png'
import backgroundImage from '../static/background_login.png'
import InputForm from '../components/inputform'

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent: "center",
    },
    logo: {
        height:45,
        width:226,
        padding:0,
        margin:0,
        top:50,
        left:85,
        borderWidth:1,
        borderColor:"white"
    },
    test: {
        top:0
    }
});

export default class LoginPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={backgroundImage} style={styles.body}>
                <Image style={styles.logo} source={logo}></Image>
                <InputForm navigation={navigate} type="SignUp"/>
            </ImageBackground>
        );
    }
}