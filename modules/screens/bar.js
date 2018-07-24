import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from '~styles'

export default class Bar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Bar</Text>
            </View>
        )
    }
}