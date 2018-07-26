import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import BackButton from '~modules/components/back-button'
import styles from '~styles'

import { withNavigation } from 'react-navigation'

//@withNavigation
class Baz extends Component {

    render() {
        const {
            navigate,
            pop,
            goBack,
            reset
        } = this.props.navigation

        console.log('this.props.navigation', this.props.navigation)
        return (
            <View style={styles.container}>
                <BackButton />
                <Text>Baz</Text>
                <Button title={'POP baz'} onPress={() => pop()} />
                <Button title={'RESET baz'} onPress={() => reset()} />
                <Button title={'NAVIGATE to home'} onPress={() => navigate('Home')} />
                <Button title='Show another modal' onPress={() => navigate('AnotherModal')} />
            </View>
        )
    }
}

//export default Baz



export default withNavigation(Baz)