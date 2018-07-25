import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import styles from '~styles'

export default class Foo extends Component {
    render() {

        const {
            navigate
        } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text>Foo</Text>
                <Button title='Show another modal' onPress={() => navigate('AnotherModal')} />
            </View>
        )
    }
}