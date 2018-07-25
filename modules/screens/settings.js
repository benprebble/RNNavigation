import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import styles from '~styles'

export default class Settings extends PureComponent {
    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <Button title={'NAVIGATE to foo'} onPress={() => navigate('Foo')} />
                <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
            </View>
        )
    }
}