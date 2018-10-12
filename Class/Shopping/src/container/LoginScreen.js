import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Platform } from 'react-native';
import { backgroundColor, primaryColorBrown } from '../styles'
// import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderLogo = () => {
        return (
            <Image
                resizeMode='contain'
                style={styles.logo}
                source={require('../../imgs/logo_app.jpg')}
            />
        )
    }

    renderInput = () => {
        return (
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ width: 20, height: 20, marginRight: 5 }}
                        source={require('../../imgs/ic_email.png')} />
                    <Text style={styles.textStyle}>Email</Text>
                </View>
                <TextInput
                    style={styles.input}
                />

                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                    <Image
                        style={{ width: 20, height: 20, marginRight: 5 }}
                        source={require('../../imgs/ic_password.png')} />
                    <Text>Password</Text>
                </View>
                <TextInput
                    style={styles.input}
                />
            </View>
        )
    }

    renderButton = () => {
        return (
            <View>
                {/* <Button
                    title='BUTTON'
                /> */}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderInput()}
                {this.renderButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    textStyle: {
        marginStart: 5,
        color: primaryColorBrown
    },
    input: {
        height: 40,
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
        borderColor: primaryColorBrown,
        paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    }
});