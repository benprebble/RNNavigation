import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import BackButton from '~modules/components/back-button'
import styles from '~styles'

export default class Baz extends Component {
    render() {

        const {
            navigate,
            pop,
            reset
        } = this.props.navigation

        return (
            <View style={styles.container}>
                <BackButton />
                <Text style={styles.h1}>Baz</Text>
                <Text>Tabs <Text style={[styles.bold, styles.italic]}>should</Text> be hidden on this screen</Text>
                <Button title={'POP baz'} onPress={() => pop()} />
                <Button title={'RESET baz'} onPress={() => reset()} />
                <Button title={'NAVIGATE to home'} onPress={() => navigate('Home')} />
                <Button title='Show another modal' onPress={() => navigate('AnotherModal')} />
            </View>
        )
    }
}