/**
 *
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    createBottomTabNavigator
} from 'react-navigation';

type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homePage}>Home Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    homePage: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
