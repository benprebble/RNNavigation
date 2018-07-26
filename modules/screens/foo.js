import React, {Component} from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import BackButton from '~modules/components/back-button'
import styles from '~styles'

export default class Foo extends Component {
    render() {

        const {
            navigate
        } = this.props.navigation

        return (
            <View style={styles.container}>
                <BackButton />
                <Text>Foo</Text>
                <TextInput
                    autoFocus={true}
                    placeholder='Email address'
                    keyboardType='email-address'
                />
                <Button title='Show another modal' onPress={() => navigate('AnotherModal')} />
            </View>
        )
    }
}