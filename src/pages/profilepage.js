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
        top:80,
        flexDirection: 'row',
    },
    demands: {
        width:250,
        height:100,
        borderRadius:10,
        backgroundColor: "white",
        top:120,
        flexDirection:"row"
    },
    skillIcons: {
        alignSelf: 'flex-start',
        height:50,
        width:50,
        margin:5,
    }
    
});

export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        const user = {
            name: "Oguzhan",
            surname: "Kocaturk",
            age: 25,
            skills: ["guitar", "piano", "yoga" ],
            demands: ["drawing", "writing"],
            images: require('../static/oguzhanpic.jpg')
        }
        this.state = {
            user: user,
            skills: <View></View>
        }
    }
    componentDidMount() {
        let skillSymbolList = this.state.user.skills.map((skill) =>  {
            if (skill === "guitar") {
                return <Image key={skill.toString()} style={styles.skillIcons} source={require('../static/guitar.png')}/>
            } else if (skill === "piano") {
                return <Image key={skill.toString()} style={styles.skillIcons} source={require('../static/piano.png')}/>
            } else if (skill === "writing") {
                return <Image key={skill.toString()} style={styles.skillIcons} source={require('../static/writing.png')}/>
            } else if (skill === "yoga") {
                return <Image key={skill.toString()} style={styles.skillIcons} source={require('../static/yoga.png')}/>
            }
        });
        skillSymbolList = <View style={styles.skills}>{skillSymbolList}</View>
        this.setState({
            skills: skillSymbolList
        });
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
                    {this.state.skills}
                    <View style={styles.demands}>
                        <Image style={styles.skillIcons} source={require('../static/piano.png')}/>
                        <Image style={styles.skillIcons} source={require('../static/yoga.png')}/>
                    </View>
            
                </View>
            </View>
        );
    }
}