import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import logo from '../static/logo_signup.png'
import backgroundImage from '../static/background_login.png'
import InputForm from '../components/inputform'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent: "center",
    },
    logo: {
        position:"absolute",
        height:hp('7%'),
        width:wp('60%'),
        padding:0,
        margin:0,
        top:hp('5%'),
        left:wp('20%'),
        borderWidth:1,
        borderColor:"white"
    },
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