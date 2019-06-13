import React, {Component} from 'react'
import { Keyboard ,Text, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    input: {
        height: 35,
        borderColor: "white",
        borderWidth: 1,
        padding:0,
        paddingLeft:0,
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
    textLabel: {
        fontSize: 20,
        color: "#f4f9fc"
        
    }
});

export default class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        prevProps = this.props
        if (nextProps.label !== this.props.label) {
            this.setState({
                username: ""
            })
        }
    }

    sendInput = (props) => {
        this.setState({
            username: props.username
        });
        const returnObj = {
            name : this.props.label,
            data : props.username
        }
        this.props.returnData(returnObj)
    }

    render () {
        return(
            <View>
                <Text style={styles.textLabel}>{this.props.label}:</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType={this.props.type === 1 ? "default" :
                    this.props.type===2 ? "email-address" : "number-pad"}
                    secureTextEntry={this.props.hide}
                    onChangeText={(username) => this.sendInput({username})}
                    value={this.state.username}>
                </TextInput>
                <Text style="height:15"></Text>
            </View>
        );
    }
    
}