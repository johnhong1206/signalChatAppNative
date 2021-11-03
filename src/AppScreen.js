import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/Auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import AddChatScreen from './screens/Chat/AddChatScreen';
import ChatScreen from './screens/Chat/ChatScreen';

const Stack = createStackNavigator();
const globalScreenOption = {
  headerStyle: {
    backgroundColor: '#171717',
  },
  headerTitleStyle: {
    color: '#ffffff',
  },
  headerTintColor: '#ffffff',
};

const AppScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalScreenOption}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppScreen;
