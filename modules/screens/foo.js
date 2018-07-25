import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from '~styles'

export default class Foo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Foo</Text>
            </View>
        )
    }
}