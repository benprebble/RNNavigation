import React, {PureComponent} from 'react'
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import {ScrollView, Text, View} from 'react-native'
import BottomTabs from './bottom-tabs'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'
import styles from '~styles'

class RightMenuContent extends PureComponent {
    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>RIGHT DRAWER</Text>
                </ScrollView>
            </View>
        )
    }
}

const RightDrawer = createDrawerNavigator(
    {
        BottomTabs,
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

export default RightDrawer