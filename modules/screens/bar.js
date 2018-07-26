import React, {Component} from 'react'
import {View, Text} from 'react-native'
import BackButton from '~modules/components/back-button'
import styles from '~styles'

export default class Bar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <BackButton />
                <Text>Bar</Text>
            </View>
        )
    }
}