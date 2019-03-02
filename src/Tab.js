import {createMaterialTopTabNavigator} from "react-navigation";
import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

class Top1Tab extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.detailPage}>Top 1 Tab</Text>
            </View>
        );
    }
}

class Top2Tab extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.detailPage}>Top 2 Tab</Text>
            </View>
        );
    }
}

export const TabNavigator = createMaterialTopTabNavigator({
    Top1Tab: {
        screen: Top1Tab,
    },
    Top2Tab: {
        screen: Top2Tab,
    }
}, {
    initialRouteName: 'Top1Tab',
    // swipeEnabled: false, // 是否允许滑动切换tabs 默认是true
    animationEnabled: false,  // 点击tab label切换tab时是否开启动画 默认为true
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    detailPage: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

