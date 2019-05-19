import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    height:60,
    minHeight:30,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ddeaff'
  },
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
});

export default class Navbar extends Component {
    render() {
      const navigate = this.props.navigate;
      return(
      <View style={styles.navbar}>
        <View style={styles.button} >
          <Text style={styles.text} onPress={() => navigate('ProfilePage')}>A</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() => navigate('Home')}>B</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() => navigate('Messages')}>C</Text>
        </View>
      </View>
      );
    }
}


