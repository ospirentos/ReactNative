import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, FlatList } from 'react-native'
import Navbar from '../components/navbar'
import MessageBubble from '../components/messagebubble'
import SendButton from '../static/sendButton.png'
//import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create ({
    page: {
        flex:1,
    },
    content: {
        flex:10,
        backgroundColor: 'pink'
    },
    inputArea: {
        backgroundColor: 'pink',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 5
    },
    input: {
        borderRadius: 15,
        backgroundColor: "red",
        width: 320,
        alignSelf: "flex-start",
        left: 20
    },
    sendButton: {
        height: 50,
        width: 50,
        left:-10
    }
})

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            renderAllMessages: <View></View>,
            inputText: ""
        }
    }

    messageSubmit = () => {
        var type = Math.random() >= 0.5;
        const { inputText } = this.state;
        let messages = this.state.messages;
        messages.push(inputText);
        //console.warn(messages)
        const renderThis = messages.map((text) =>  {
            return <MessageBubble key={text.toString()} text={text} type={type}/>
        });
        this.setState({
            messages: messages,
            renderAllMessages: renderThis
        });
        this.textInput.clear();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.page}>
                <Navbar navigate={navigate}/>
                <View style={styles.content}>
                    <FlatList
                        data={this.state.messages}
                        renderItem={({item}) => <MessageBubble text={item}/>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.inputArea}>
                    <TextInput 
                        onChangeText={inputText => this.setState({inputText})}
                        multiline={true}
                        style={styles.input}
                        ref={input => { this.textInput = input }}
                    />
                    <TouchableHighlight onPress={this.messageSubmit}>
                    <Image style={styles.sendButton} source={SendButton} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}