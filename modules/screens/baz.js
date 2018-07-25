import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from '~styles'

export default class Baz extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Baz</Text>
            </View>
        )
    }
}