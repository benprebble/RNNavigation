import React, {Component} from 'react'
import {View, Text} from 'react-native'
import BackButton from '~modules/components/back-button'
import styles from '~styles'

export default class Bar extends Component {

    //static navigationOptions = { header: null }
    render() {
        return (
            <View style={styles.container}>
                <BackButton />
                <Text style={styles.h1}>Bar</Text>
                <Text>Header and Tabs <Text style={[styles.bold, styles.italic]}>should</Text> be hidden on this screen</Text>
            </View>
        )
    }
}