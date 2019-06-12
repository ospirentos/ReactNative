import React, {Component} from 'react'
import { Keyboard ,Text, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import hash from 'hash.js';
import backgroundImage from '../static/background.png'
import logo from '../static/logo.png'
import InputForm from '../components/inputform'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    body: {
        flex:1,
        justifyContent: "center"
    },
    logo: {
        padding:0,
        top:-20,
        left:65,
        height:106,
        width:278
    },
    blurBackground: {
        backgroundColor: "#ffffff",
        height:hp('50%'),
        width: wp('70%'),
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
    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=> this.setState({keyboardState:true}));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=> this.setState({keyboardState:false}));
      }
    
      componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }

    handlerSubmit = () => {
        const {navigate} = this.props.navigation;
        const userCredentals = {
            username: this.state.username,
            password: hash.sha256().update(this.state.password).digest('hex')
        }
        const jsonUserCredentals = JSON.stringify(userCredentals)
        const serverResponse = true
        if (serverResponse === true) {
            navigate("Home")
        }
        else {
            Alert.alert('Wrong username or password!')
        }
    }
    
    render() {
        const {navigate} = this.props.navigation;
        return (
                <ImageBackground source={backgroundImage} style={styles.body}>
                        <Image source={logo} style={styles.logo}></Image>
                        <InputForm navigation={navigate} type="Login"/>
                </ImageBackground>
        );
    }
}