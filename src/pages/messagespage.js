import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import Navbar from '../components/navbar'
import MessageBubble from '../components/messagebubble'

const styles = StyleSheet.create ({
    page: {
        flex:1,
    },
    content: {
        flex:10,
        backgroundColor: 'pink'
    },
    input: {
        
    }
})

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            renderAllMessages: <View></View>,
        }
    }

    componentDidUpdate() {

    }

    messageSubmit = (props) => {
        const text = props.nativeEvent.text;
        let messages = this.state.messages;
        messages.push(text);
        //console.warn(messages)
        const renderThis = messages.map((text) =>  {
            return <MessageBubble key={text.toString()} text={text}/>
        });
        this.setState({
            messages: messages,
            renderAllMessages: renderThis
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.page}>
                <Navbar navigate={navigate}/>
                <View style={styles.content}>
                    {this.state.renderAllMessages}
                </View>
                <TextInput onSubmitEditing={(event) => this.messageSubmit(event)} style={styles.input} />
            </View>
        );
    }
}