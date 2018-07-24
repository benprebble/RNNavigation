import React, {Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import styles from '~styles'

export default class Settings extends Component {

    constructor (props) {
        super (props)
    }

    render () {

        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <Button title={'Go to foo'} onPress={() => this.props.navigation.navigate('Foo')} />
            </View>
        )
    }
}