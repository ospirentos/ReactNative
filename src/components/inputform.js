import React, {Component} from 'react'
import { Keyboard ,Text, View, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import InputBox from './inputbox'
import hash from 'hash.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    loginFormNoSoftKeyboard: {
        width:wp('55%'),
        height:230,
        top:30,
        left:wp('7%'),
    },
    loginFormSoftKeyboard: {
        width:wp('55%'),
        height:230,
        top:30,
        left:wp('7%'),
        marginBottom:90
    },
    signUpFormNoSoftKeyboard: {
        width:270,
        height:230,
        top:30,
        left:70,
    },
    signUpFormSoftKeyboard: {
        width:270,
        height:230,
        top:30,
        left:70,
        marginBottom:30
    },
    submitButton: {
        backgroundColor: "#1ab7f1",
        width:wp('50%'),
        height:30,
        marginLeft:wp('3%'),
        marginTop:10,
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
    textFoot: {
        fontSize: 15,
        top:hp('3%'),
        left: wp('6%'),
    }
});

export default class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            keyboardState: false,
            formData: {},
            formType: this.props.type,
            data:""
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

    handlerSubmitLogin = () => {
        const navigate = this.props.navigation
        const userCredentals = {
            username: this.state.username,
            password: hash.sha256().update(this.state.password).digest('hex')
        }
        const serverResponse = true
        if (serverResponse === true) {
            navigate("Home")
        }
        else {
            Alert.alert('Wrong username or password!')
        }
    }

    handlerSubmitSignUp = () => {
        if (this.state.formType === "SignUp") {
            this.setState ({
                formType: "Step2"
            })
        } else if (this.state.formType === "Step2") {
            this.setState ({
                formType: "Step3"
            })
        } else if (this.state.formType === "Step3") {
            const userCredentals = {
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                username: this.state.username,
                password: hash.sha256().update(this.state.password).digest('hex')
            }
            const jsonUserCredentals = JSON.stringify(userCredentals)
            
        }
    }

    callbackFromChild = (data) => {
        if (data.name === "Username") {
            this.setState({
                username: data.data
            })
        } else if (data.name === "Password") {
            this.setState({
                password: data.data
            })
        } else if (data.name === "Name") {
            this.setState({
                name: data.data
            })
        } else if (data.name === "Surname") {
            this.setState({
                surname: data.data
            })
        } else if (data.name === "E-mail") {
            this.setState({
                email: data.data
            })
        }
    }

    render() {
        const navigate = this.props.navigation
        if (this.state.formType === "Login") {
            return(
                <View style={this.state.keyboardState ? styles.loginFormSoftKeyboard : styles.loginFormNoSoftKeyboard}>
                    <InputBox label="Username" type={2} hide={false} returnData={this.callbackFromChild}/>
                    <InputBox label="Password" type={1} hide={true} returnData={this.callbackFromChild}/>
                    <Text style={styles.submitButton} onPress={this.handlerSubmitLogin}>Login</Text>
                    <Text style={styles.textFoot} onPress={()=>navigate("SignUp")}>Have no account? Sign Up!</Text>
                </View>
            );
        }
        else if (this.state.formType === "SignUp") {
            return(
                <View style={this.state.keyboardState ? styles.signUpFormSoftKeyboard : styles.signUpFormNoSoftKeyboard}>
                    <InputBox label="Name" type={1} hide={false} returnData={this.callbackFromChild}/>
                    <InputBox label="Surname" type={1} hide={false} returnData={this.callbackFromChild}/>
                    <Text style={styles.submitButton} onPress={this.handlerSubmitSignUp}>Next!</Text>
                    <Text style={styles.textFoot} onPress={()=>navigate("SignUp")}>Already have an account? Sign In!</Text>
                </View>
            );
        }
        else if (this.state.formType === "Step2") {
            return(
                <View style={this.state.keyboardState ? styles.signUpFormSoftKeyboard : styles.signUpFormNoSoftKeyboard}>
                    <InputBox label="E-mail" type={2} hide={false} returnData={this.callbackFromChild}/>
                    <Text style={styles.submitButton} onPress={this.handlerSubmitSignUp}>Next!</Text>
                </View>
            );
            
        }
        else if (this.state.formType === "Step3") {
            return (
                <View style={this.state.keyboardState ? styles.signUpFormSoftKeyboard : styles.signUpFormNoSoftKeyboard}>
                <InputBox label="Username" type={1} hide={false} returnData={this.callbackFromChild}/>
                <InputBox label="Password" type={1} hide={true} returnData={this.callbackFromChild}/>
                <InputBox label="Verify Password" type={1} hide={true} returnData={this.callbackFromChild}/>
                <Text style={styles.submitButton} onPress={this.handlerSubmitSignUp}>Finish!</Text>
                </View>
            );
        }
    }
}