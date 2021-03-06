import React, {PureComponent} from 'react'
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import {ScrollView, View, Text, Button} from 'react-native'
import RightDrawerNavigator from './right-drawer-navigator'
import BottomTabNavigator from './bottom-tab-navigator'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'
import styles from '~styles'

class LeftMenuContent extends PureComponent {
    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>LEFT DRAWER</Text>
                    <Button title={'NAVIGATE to foo'} onPress={() => navigate('Foo')} />
                    <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
                    <Button title={'NAVIGATE to baz'} onPress={() => navigate('Baz')} />
                </ScrollView>
            </View>
        )
    }
}

const LeftDrawerNavigator = createDrawerNavigator(
    {
        RightDrawerNavigator,
        BottomTabNavigator
    },
    {
        contentComponent: LeftMenuContent,
        getCustomActionCreators: (route, stateKey) => ({
            closeLeftDrawer: () => DrawerActions.closeDrawer({key: stateKey}),
            toggleLeftDrawer: () => DrawerActions.toggleDrawer({key: stateKey})
        })
    }
)

export default LeftDrawerNavigator
