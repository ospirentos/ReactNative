import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import logo from '../static/logo_signup.png'
import backgroundImage from '../static/background_login.png'
import SignupForm from '../components/signupform'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        padding: 0,
        height: hp('11%'),
        width: wp('50%')
    },
    blurBackground: {
        backgroundColor: "#ffffff3d",
        height: hp('50%'),
        width: wp('90%'),
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default class LoginPage extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const style = { height: wp('50%') / 5 }
        const styleLogo = StyleSheet.flatten([styles.logo, style]);
        return (
            <ImageBackground source={backgroundImage} style={styles.body}>
                <View style={styles.blurBackground}>
                    <Image source={logo} style={styleLogo}></Image>
                    <SignupForm navigation={navigate} type="Login" />
                </View>
            </ImageBackground>
        );
    }
}