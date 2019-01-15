import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';

const AppNavigator = createStackNavigator(
    {
        Start: {
            screen: StartScreen
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Start'
    }
);

export default createStackNavigator(AppNavigator);