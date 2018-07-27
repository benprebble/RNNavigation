import React, {PureComponent} from 'react'
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import {ScrollView, View, Text, Button} from 'react-native'
import BottomTabNavigator from './bottom-tab-navigator'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'
import styles from '~styles'

class RightMenuContent extends PureComponent {
    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>RIGHT DRAWER</Text>
                    <Button title={'NAVIGATE to foo'} onPress={() => navigate('Foo')} />
                    <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
                </ScrollView>
            </View>
        )
    }
}

const RightDrawerNavigator = createDrawerNavigator(
    {
        BottomTabNavigator,
        ...screenRoutes
    },
    {
        drawerPosition: 'right',
        contentComponent: RightMenuContent,
        getCustomActionCreators: (route, stateKey) => ({
            closeRightDrawer: () => DrawerActions.closeDrawer({key: stateKey}),
            toggleRightDrawer: () => DrawerActions.toggleDrawer({key: stateKey})
        })
    }
)

export default RightDrawerNavigator