import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCACvSZohBaHX3ppzApNyLLdU6-fpZKzTA",
    authDomain: "androidnative-c2d74.firebaseapp.com",
    databaseURL: "https://androidnative-c2d74.firebaseio.com",
    projectId: "androidnative-c2d74",
    storageBucket: "androidnative-c2d74.appspot.com",
    messagingSenderId: "273543091961",
    appId: "1:273543091961:web:0399c150c2906d49"
};
firebase.initializeApp(config);

const itemsRef = firebase.database().ref('items');
itemsRef.on('value', (snapshot) => {
  console.log(snapshot.val());
});

const styles = StyleSheet.create({
  text: {
    color:'#e5efff',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  },
  button: {
    height:60,
    width: 100,
    backgroundColor: 'skyblue'
  },
  navbar: {
    height:60,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ddeaff'
  },
  page: {
    flex:1
  },
  userCardArea: {
    flex:5,
    backgroundColor: '#bfd7ff',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  matchCardArea: {
    flex:5,
    backgroundColor: '#c2bfff',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  matchNavigationButtonLeft: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#b434f9',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 120
  },
  matchNavigationButtonRight: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#b434f9',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 120
  },
  matchCard: {
    height:200,
    width: 275,
    backgroundColor: 'red',
    marginTop: 50
  },
  userCard: {
    height:200,
    width: 275,
    backgroundColor: 'red',
    marginTop: 50
  }
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true};

    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ),1000);
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.text}>{this.props.text}</Text>
    )
  }
}

export default class HelloWorldApp extends Component {
  componentDidMount(){
    /*const itemsRef = firebase.database().ref('items');
    const item = {
      title: "test",
      user: "test2"
    }
    itemsRef.push(item);*/
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.navbar}>
          <View style={styles.button}>
            <Blink text='A' />
          </View>
          <View style={styles.button}>
            <Blink text='B' />
          </View>
          <View style={styles.button}>
            <Blink text='C' />
          </View>
        </View>
        <View style={styles.userCardArea}>
          <View style={styles.userCard}></View>
        </View>
        <View style={styles.matchCardArea}>
          <Text style={styles.matchNavigationButtonLeft}>
            {"<"}
          </Text>
          <View style={styles.matchCard}></View>
          <Text style={styles.matchNavigationButtonRight}>
            {">"}
          </Text>
        </View>
      </View>
      
    );
  }
}