
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createMaterialTopTabNavigator,
} from 'react-navigation';

type Props = {};
export default class DetailPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.detailPage}>Detail Page</Text>
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
    detailPage: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
