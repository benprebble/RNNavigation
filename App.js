import React, {Component} from 'react'
import {View} from 'react-native'
import RootNavigationStack from '~modules/navigation/primary-navigator-v2'

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <RootNavigationStack />
            </View>
        )
    }
}
