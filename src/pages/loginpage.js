import React, { Component } from 'react'
import { Keyboard, View, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import hash from 'hash.js';
import backgroundImage from '../static/background.png'
import logo from '../static/logo.png'
import LoginForm from '../components/loginform'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        padding: 0,
        height: hp('11%'),
        width: wp('60%')
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
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            keyboardState: false
        }
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState({ keyboardState: true }));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboardState: false }));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    handlerSubmit = () => {
        const { navigate } = this.props.navigation;
        const userCredentals = {
            username: this.state.username,
            password: hash.sha256().update(this.state.password).digest('hex')
        }
        const serverResponse = false
        if (serverResponse === true) {
            navigate("Home")
        }
        else {
            Alert.alert('Wrong username or password!')
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const style = { height: wp('60%') / 2.76 }
        const styleLogo = StyleSheet.flatten([styles.logo, style]);
        return (
            <ImageBackground source={backgroundImage} style={styles.body}>
                <View style={styles.blurBackground}>
                    <Image source={logo} style={styleLogo}></Image>
                    <LoginForm navigation={navigate} type="Login" />
                </View>
            </ImageBackground>
        );
    }
}