import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Navbar from '../components/navbar';


const styles = StyleSheet.create({
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
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50
  },
  userCard: {
    height:200,
    width: 275,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50
  },
  profilePic: {
    width: 150,
    height: 200
  }
});

export default class HelloWorldApp extends Component {
  constructor(props) {
    const image1 = require('../static/profilepic1.jpg');
    const image2 = require('../static/profilepic2.jpg');
    const image3 = require('../static/profilepic3.jpg');
    const image4 = require('../static/profilepic4.jpg');
    const image5 = require('../static/profilepic5.jpg');
    let listOfImages = [];
    listOfImages.push(image2);
    listOfImages.push(image3);
    listOfImages.push(image4);
    listOfImages.push(image5);
    super(props);
    this.state = {
      imagePointer: 0,
      imageToShow: image2,
      profilePic: image1,
      list : listOfImages
    }
  }

  onPressHandlerLeft = () => {
    let imagePointer = this.state.imagePointer;
    imagePointer = (imagePointer - 1) < 0 ?
      0 : ((imagePointer - 1) % this.state.list.length);
      this.setState (previousState => ({
        imagePointer : imagePointer,
        imageToShow: this.state.list[imagePointer]
      }));
  }

  onPressHandlerRight = () => {
    let imagePointer = this.state.imagePointer;
    imagePointer = (imagePointer + 1) > this.state.list.length-1 ?
    this.state.list.length-1 : ((imagePointer + 1) % this.state.list.length);
    this.setState (previousState => ({
      imagePointer : imagePointer,
      imageToShow: this.state.list[imagePointer]
    }));
  }

  handlePress = () => {
    console.warn("Pressed");
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.page}>
        <Navbar navigate={navigate}/>
        <View style={styles.userCardArea}>
          <View style={styles.userCard}>
            <Image
              source={this.state.profilePic}
              style={styles.profilePic}
            />
          </View>
        </View>
        <View style={styles.matchCardArea}>
          <Text style={styles.matchNavigationButtonLeft} onPress={this.onPressHandlerLeft}>
            {"<"}
          </Text>
            <View style={styles.matchCard}>
              <Image
                source={this.state.imageToShow}
                style={styles.profilePic}
              />
            </View>
          <Text style={styles.matchNavigationButtonRight} onPress={this.onPressHandlerRight}>
            {">"}
          </Text>
        </View>
      </View>
      
    );
  }
}