import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import WelcomePage from '../WelcomePage';
import HomePage from "../HomePage";

const MainPage = createStackNavigator({
    Home: HomePage,
});

export default createSwitchNavigator(
    {
        Welcome: WelcomePage,
        Main: MainPage,
    },
    {
        initialRouteName: 'Welcome',
    }
)