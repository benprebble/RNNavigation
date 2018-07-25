import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import styles from '~styles'

import { withNavigation } from 'react-navigation';

//@withNavigation
class Baz extends Component {

    render() {
        const {navigate, push, goBack} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>Baz</Text>
                <Button title={'Go back'} onPress={() => goBack()} />
            </View>
        )
    }
}

export default withNavigation(Baz)