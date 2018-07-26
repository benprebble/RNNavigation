import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {withNavigation} from 'react-navigation'

class BackButton extends Component {
    render() {
        return (
            <View style={{position: 'absolute', top: 10, left: 10}}>
                <Button title='Back' onPress={() => {this.props.navigation.goBack()}}/>
            </View>
        )
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the navigation prop
export default withNavigation(BackButton)