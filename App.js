import React, {Component} from 'react'
import {View} from 'react-native'
import AppNavigator from '~modules/navigation/primary-navigator'

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator />
            </View>
        )
    }
}
