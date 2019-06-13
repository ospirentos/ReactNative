import React, {Component} from 'react'
import { Dimensions, Keyboard ,Text, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
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
        top:wp('5%'),
        left:wp('10%'),
        height:hp('11%'),
        width:wp('50%')
    },
    blurBackground: {
        backgroundColor: "#ffffff3d",
        height:hp('70%'),
        width: wp('70%'),
        left:wp('15%'),
        borderRadius:17
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
        console.warn(hp('35%') / wp('21%'))
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
        const serverResponse = false
        if (serverResponse === true) {
            navigate("Home")
        }
        else {
            Alert.alert('Wrong username or password!')
        }
    }
    
    render() {
        const {navigate} = this.props.navigation;
        const style={height: wp('50%') / 2.76}
        const styleLogo = StyleSheet.flatten([styles.logo, style]);
        return (
                <ImageBackground source={backgroundImage} style={styles.body}>
                    <View style={styles.blurBackground}>
                        <Image source={logo} style={styleLogo}></Image>
                        <InputForm navigation={navigate} type="Login"/>
                    </View>
                </ImageBackground>
        );
    }
}