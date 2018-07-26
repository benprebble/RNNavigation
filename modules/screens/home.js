import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import styles from '~styles'

export default class Home extends PureComponent {
    render () {
        const {
            navigate,
            push,
            replace
        } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button title={'NAVIGATE to foo'} onPress={() => navigate('Foo')} />
                <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
                <Button title={'PUSH to bar'} onPress={() => push('Bar')} />
                <Button title={'PUSH to baz'} onPress={() => push('Baz')} />
                <Button title={'REPLACE baz'} onPress={() => replace('Baz')} />

                <Button title='Show fullscreen modal' onPress={() => navigate('Modal')} />

            </View>
        )
    }
}