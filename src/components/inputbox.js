import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    input: {
        height: 35,
        borderColor: "white",
        borderWidth: 1,
        padding: 0,
        paddingLeft: wp(3),
        backgroundColor: "#00000000",
        borderRadius: 17,
        //shadowColor: "#000",
        //shadowOffset: {
        //    width: 0,
        //    height: 2,
        //},
        //shadowOpacity: 0.25,
        //shadowRadius: 3.84,
        //elevation: 3,
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
            inputData: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        prevProps = this.props
        if (nextProps.label !== this.props.label) {
            this.setState({
                inputData: ""
            })
        }
    }

    sendInput = (props) => {
        this.setState({
            inputData: props.inputData
        });

        const returnObj = {
            name: this.props.label,
            data: props.inputData
        }
        this.props.returnData(returnObj)
    }

    clearState = () => {
        this.setState({
            inputData:""
        })
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    keyboardType={this.props.type === 1 ? "default" :
                        this.props.type === 2 ? "email-address" : "number-pad"}
                    secureTextEntry={this.props.hide}
                    onChangeText={(inputData) => this.sendInput({ inputData })}
                    value={this.state.inputData}
                    placeholder={this.props.label}
                >
                </TextInput>
                <Text style="height:15"></Text>
            </View>
        );
    }

}