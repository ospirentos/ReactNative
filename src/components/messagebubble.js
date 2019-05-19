import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    messageBubble: {
        backgroundColor: 'pink',
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
    },
    test3: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    test4: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    littleTriangleType1: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderTopWidth: 12,
        borderRightWidth: 6,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#37fc86',
        borderLeftColor: 'transparent',
        left: 6,
    },
    textAreaType1: {
        width:200,
        backgroundColor: '#37fc86',
        flexDirection: 'row',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        top: -1,
        left:12
    },
    usernameType1: {
        height: 25,
        backgroundColor: '#37fc86',
        width: 200,
        fontWeight: 'bold',
        paddingLeft: 7,
        paddingTop: 5,
        borderTopRightRadius: 15
    },
});

export default class MessageBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            type: props.type
        }
    }
    render () {
        if (this.state.type === true)
        {
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
        else {
            return (
                <View style={styles.messageBubble}>
                    <View style={styles.test3}>
                        <View style={styles.littleTriangleType1}></View>
                        <Text style={styles.usernameType1}>Oguzhan</Text>
                    </View>
                    <View style={styles.test4}>
                        <View style={styles.textAreaType1}>
                            <Text style={styles.text}>{this.state.text}</Text>
                        </View>
                    </View>
                    
                </View>
            );
        }
        
    }
}