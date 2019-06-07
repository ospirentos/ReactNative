import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginPage from './src/pages/loginpage'
import MainPage from './src/pages/mainpage'
import ProfilePage from './src/pages/profilepage'
import MessagesPage from './src/pages/messagespage'
import SignupPage from './src/pages/signuppage'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
  Login: {
    screen: LoginPage
  },
  Home: {
    screen: MainPage
  },
  ProfilePage: {
    screen: ProfilePage
  },
  Messages: {
    screen: MessagesPage
  },
  SignUp: {
    screen: SignupPage 
  }
  },{
  defaultNavigationOptions: {
    header: null
  }});

export default createAppContainer(AppNavigator);