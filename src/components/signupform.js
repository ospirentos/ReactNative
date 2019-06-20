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

export default class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            waiting: false
        }
        this.emailInputBox = React.createRef();
    }

    handlerCheckEmail = () => {
        const email = {
            email:this.emailInputBox.current.getState() 
        }
        console.log(email);      
        this.setState = ({
            waiting: true
        })
        console.log("after state change")
        fetch('http://172.16.1.40:80/api/emailcheck', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email),
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.success) {
                console.log("True!")
            } else {
                console.log("False!")
            }
        }).catch(error => {
            console.log("Error occured during email check!");
            console.log("Error code:", error.message);
        });
    }

    callbackFromChild = (data) => {
        if (data.name === "Enter your email address") {
            this.setState({
                email: data.data
            })
        }
    }

    render() {
        const navigate = this.props.navigation
        return (
            <View style={styles.loginFormNoSoftKeyboard}>
                <InputBox
                    label="Enter your email address"
                    type={2}
                    hide={false}
                    returnData={this.callbackFromChild}
                    ref={this.emailInputBox}
                />
                <View style={styles.textFoot}>
                    {this.state.waiting ? <ActivityIndicator size="large" color="#0000ff" /> :
                        <Text style={styles.submitButton} onPress={this.handlerCheckEmail}>Check!</Text>
                    }
                    <Text style={styles.text} onPress={() => navigate("Login")}>Already have an account? Sign in!</Text>
                </View>

            </View>
        );
    }
}