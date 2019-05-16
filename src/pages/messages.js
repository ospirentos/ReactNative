import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Navbar from '../components/navbar'

export default class Messages extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Navbar navigate={navigate}/>
        );
    }
}