import React, {Component} from 'react'
import { Keyboard ,Text, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import hash from 'hash.js';
import backgroundImage from '../static/background_login.png'
import logo from '../static/logo.png'

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
                        <View style={this.state.keyboardState ? styles.loginFormSoftKeyboard : styles.loginFormNoSoftKeyboard}>
                            <Text style={styles.textLabel}>Username:</Text>
                            <TextInput 
                                style={styles.input} 
                                keyboardType="email-address"
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}>
                            </TextInput>
                            <Text style="height:15"></Text>
                            <Text style={styles.textLabel}>Password:</Text>
                            <TextInput 
                                style={styles.input} 
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}></TextInput>
                            <Text style={styles.submitButton} onPress={this.handlerSubmit}>Login</Text>
                            <Text style={styles.textFoot} onPress={()=>navigate("SignUp")}>Have no account? Sign Up!</Text>
                        </View>
                </ImageBackground>
        );
    }
}