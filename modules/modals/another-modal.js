import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

class AnotherModalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 30}}>This is another modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='Dismiss'
                />
            </View>
        )
    }
}

export default AnotherModalScreen