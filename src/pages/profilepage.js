import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Navbar from '../components/navbar'

const styles = StyleSheet.create({
    page: {
        flex:1
    },
    profileArea: {
        backgroundColor: 'blue',
        flex: 10,
        alignItems: 'center'
    },
    pictureArea:{
        backgroundColor: "#c6fffb",
        height:200,
        width: 275,
        top: 25,
        alignItems: 'center',
    },
    pictures: {
        width: 150,
        height: 200
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    surname: {
        fontSize: 20,
        left: 10,
        fontWeight: 'bold'
    },
    fullNameContainer: {
        width:250,
        top:50,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    age: {
        fontSize: 20,
        left: 10,
        fontWeight: 'bold',
    },
    skills: {
        width:250,
        height:100,
        borderRadius:10,
        backgroundColor: "white",
        top:80
    },
    demands: {
        width:250,
        height:100,
        borderRadius:10,
        backgroundColor: "white",
        top:120
    }
    
});

export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        const user = {
            name: "Oguzhan",
            surname: "Kocaturk",
            age: 25,
            skills: ["guitar", "piano" ],
            demands: ["drawing", "writing"],
            images: require('../static/oguzhanpic.jpg')
        }
        this.state = {
            user: user
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.page}>
                <Navbar navigate={navigate}/>
                <View style={styles.profileArea}>
                    <View style={styles.pictureArea}>
                        <Image style={styles.pictures} source={this.state.user.images}/>
                    </View>
                    <View style={styles.fullNameContainer}>
                        <Text style={styles.name}>{this.state.user.name}</Text>
                        <Text style={styles.surname}>{this.state.user.surname}</Text>
                        <Text style={styles.age}>, {this.state.user.age}</Text>
                    </View>
                    <View style={styles.skills}></View>
                    <View style={styles.demands}></View>
            
                </View>
            </View>
        );
    }
}