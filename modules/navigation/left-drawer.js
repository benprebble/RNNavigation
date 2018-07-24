import React, {PureComponent} from 'react'
import {ScrollView, Text, View} from 'react-native'
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import RightDrawer from './right-drawer'
import BottomTabs from './bottom-tabs'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'
import styles from '~styles'

class LeftMenuContent extends PureComponent {

    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>LEFT DRAWER</Text>
                </ScrollView>
            </View>
        )
    }
}

const LeftDrawer = createDrawerNavigator(
    {
        RightDrawer: RightDrawer,
        BottomTabs: BottomTabs
    },
    {
        contentComponent: LeftMenuContent,
        getCustomActionCreators: (route, stateKey) => ({
            closeLeftDrawer: () => DrawerActions.closeDrawer({key: stateKey}),
            toggleLeftDrawer: () => DrawerActions.toggleDrawer({key: stateKey})
        })
    }
)

export default LeftDrawer
