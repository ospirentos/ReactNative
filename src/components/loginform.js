import React, { Component } from 'react'
import { Keyboard, Text, View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import InputBox from './inputbox'
import hash from 'hash.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    loginFormNoSoftKeyboard: {
        width: wp('65%'),
        height: 230,
        top: 30,
        left: 0,
    },
    submitButton: {
        backgroundColor: "#1ab7f1",
        width: wp('50%'),
        height: 30,
        //marginLeft:wp('3%'),
        marginTop: hp(1),
        marginBottom: hp(3),
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
        top: hp(0),
        left: 0,
        alignItems: "center"
    },
    text: {
        padding: 0,
        margin: 0,
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
            data: "",
            waiting: false,
            showLoginPage: false
        }
        this.emailInputBox = React.createRef();
        this.passwordInputBox = React.createRef();
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState({ keyboardState: true }));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboardState: false }));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentDidMount() {
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    getData = async (props) => {
        const navigate = this.props.navigation
        try {
            const value = await AsyncStorage.getItem('loginToken')
            console.log("Token value in storage: ", value);
            if (value !== null) {
                const jsonData = {
                    token: value
                };
                fetch('http://172.16.1.40:80/api/tokencheck', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData),
                }).then(function (response) {
                    return response.json();
                }).then((result) => {
                    if (result.success === true) {
                        navigate("Home")
                    } else {
                        return true
                    }
                })
            }
            else {
                return true;
            }
        } catch (e) {
            console.log("Connection to the login server has failed.");
            console.log("Error code:", e.message)
        }
    }

    clearAll = async () => {
        try {
            await AsyncStorage.clear()
            console.log("Clear All has been invoked!!!");
        } catch (e) {
            // clear error
        }
    }

    setValue = async (props) => {
        try {
            await AsyncStorage.setItem('loginToken', props)
        } catch (e) {
            console.error(e.message);
        }
    }
    handlerSubmitLogin = () => {
        const navigate = this.props.navigation
        this.emailInputBox.current.clearState();
        this.passwordInputBox.current.clearState();
        if (!this.validateEmail(this.state.email)) {
            console.log(this.state.email);
            Alert.alert('Wrong email format! Please enter a valid email address');
        } else {
            const userCredentals = {
                email: this.state.email,
                password: hash.sha256().update(this.state.password).digest('hex')
            }
            this.setState({
                waiting: true
            })
            fetch('http://172.16.1.40:80/api/logincheck', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCredentals),
            }).then(function (response) {
                return response.json();
            })
                .then((result) => {
                    if (result.success === true) {
                        const token = result.token;
                        (async () => {
                            await this.setValue(token)
                        })();
                        navigate("Home")
                    }
                    else {
                        Alert.alert('Wrong username or password!')
                    }
                })
                .then(() => {
                    this.setState({
                        waiting: false
                    })
                })
                .catch(error => {
                    console.log("Connection to the login server has failed.");
                    console.log("Error code:", error.message)
                })
        }

    }

    handlerSubmitSignUp = () => {
        if (this.state.formType === "SignUp") {
            this.setState({
                formType: "Step2"
            })
        } else if (this.state.formType === "Step2") {
            this.setState({
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
        if (data.name === "Email") {
            this.setState({
                email: data.data
            })
        } else if (data.name === "Password") {
            this.setState({
                password: data.data
            })
        }
    }

    render() {
        const navigate = this.props.navigation
        if (this.getData()) {
            return (
                <View style={styles.loginFormNoSoftKeyboard}>
                    <InputBox
                        label="Email"
                        type={2}
                        hide={false}
                        returnData={this.callbackFromChild}
                        ref={this.emailInputBox}
                    />
                    <InputBox
                        label="Password"
                        type={1}
                        hide={true}
                        returnData={this.callbackFromChild}
                        ref={this.passwordInputBox}
                    />
                    <View style={styles.textFoot}>
                        {this.state.waiting ? <ActivityIndicator size="large" color="#0000ff" /> :
                            <Text style={styles.submitButton} onPress={this.handlerSubmitLogin}>Login</Text>
                        }
                        <Text style={styles.text} onPress={() => navigate("SignUp")}>Have no account? Sign Up!</Text>
                    </View>

                </View>
            );
        } else {
            return (<View></View>);
        }
    }
}