import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import WelcomePage from '../WelcomePage';
import HomePage from "../HomePage";
import UserPage from "../UserPage";
import DetailPage from "../DetailPage";
import MatericalIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: "首页",
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            },
        },
        Check: {
            screen: DetailPage,
            navigationOptions: {
                tabBarLabel: "查数",
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-search'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        User: {
            screen: UserPage,
            navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'md-person'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            },
        },
    },
    {
        // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
        lazy: true,
        tabBarOptions: {
            inactiveTintColor: "#8F8F8F",
            activeTintColor: "#ED5601",
            labelStyle: {
                fontSize: 11
            }
        }
    }
);

export default createSwitchNavigator(
    {
        Welcome: WelcomePage,
        BottomTabNavigator: BottomTabNavigator,
    },
    {
        initialRouteName: 'Welcome',
    }
)