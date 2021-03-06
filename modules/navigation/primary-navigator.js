import React from 'react'
import {TouchableWithoutFeedback, View, Text} from 'react-native'
import LeftDrawerNavigator from '~modules/navigation/left-drawer-navigator'
import {createStackNavigator} from 'react-navigation'
import {tabRoutes, screenRoutes, modalRoutes} from '~modules/navigation/routes'

const headerButton = (dir, navigation) => {

    let drawNavigator
    if (navigation.getChildNavigation) {
        drawNavigator = navigation.getChildNavigation('RightDrawerNavigator')
    }

    const handleToggleDrawer = () => {

        if ( ! drawNavigator) {
            console.warn('No drawNavigator!!!')
            return false
        }

        if (dir === 'left') {
            drawNavigator.closeRightDrawer()
            drawNavigator.toggleLeftDrawer()
        }

        if (dir === 'right') {
            drawNavigator.closeLeftDrawer()
            drawNavigator.toggleRightDrawer()
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handleToggleDrawer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 5, paddingRight: 5}}>
                <Text>{dir === 'left' ? 'LEFT' : 'RIGHT'}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const MainStackNavigator = createStackNavigator(
    {
        LeftDrawerNavigator,
        ...tabRoutes,
        ...screenRoutes
    },
    {
        navigationOptions: ({navigation}) => ({
            headerMode: 'float',
            headerStyle: {
                backgroundColor: '#A0A0A0'
            },
            headerLeft: headerButton('left', navigation),
            headerTitle: <Text>LOGO</Text>,
            headerRight: headerButton('right', navigation),
        })
    }
)

const AppNavigator = createStackNavigator(
    {
        MainStackNavigator,
        ...modalRoutes
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

export default AppNavigator
