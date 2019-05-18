import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    messageBubble: {
        backgroundColor: 'pink',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    textArea: {
        width:200,
        backgroundColor: '#00BCD4',
        flexDirection: 'row',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        top: -1
    },
    littleTriangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderTopWidth: 12,
        borderRightWidth: 6,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#00BCD4',
        borderLeftColor: 'transparent',
        left: -6,
    },
    text: {
        flex:1,
        padding: 7
    },
    username: {
        height: 25,
        backgroundColor: '#00BCD4',
        width: 200,
        fontWeight: 'bold',
        paddingLeft: 7,
        paddingTop: 5,
        borderTopLeftRadius: 15
    },
    test: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right: 12
    },
    test2: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default class MessageBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    render () {
        return (
            <View style={styles.messageBubble}>
                <View style={styles.test2}>
                    <Text style={styles.username}>Oguzhan</Text>
                    <View style={styles.littleTriangle}></View>
                </View>
                <View style={styles.test}>
                    <View style={styles.textArea}>
                        <Text style={styles.text}>{this.state.text}</Text>
                    </View>
                </View>
                
            </View>
        );
    }
}