import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import styles from '~styles'

import TransitionConfiguration from '~modules/effects'

export default class Home extends PureComponent {
    render () {
        const {
            navigate,
            push,
            replace
        } = this.props.navigation

        const pushToBar = () => {

            console.log('pushToBar props', this.props)

            this.props.navigation.push('Bar')
        }

        console.log('this.props', this.props)

        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button title={'NAVIGATE to foo'} onPress={() => navigate({
                    routeName: 'Foo',
                    params: {
                        transition: TransitionConfiguration
                    }
                })} />
                <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
                <Button title={'PUSH to bar'} onPress={pushToBar} />
                <Button title={'PUSH to baz'} onPress={() => push('Baz')} />
                <Button title={'REPLACE baz'} onPress={() => replace('Baz')} />

                <Button title='Show fullscreen modal' onPress={() => navigate('Modal')} />

            </View>
        )
    }
}