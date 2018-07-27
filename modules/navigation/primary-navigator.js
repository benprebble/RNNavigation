import React from 'react'
import {TouchableWithoutFeedback, View, Text, Button} from 'react-native'
import LeftDrawer from '~modules/navigation/left-drawer'
import {createStackNavigator} from 'react-navigation'
import {tabRoutes, screenRoutes, modalRoutes} from '~modules/navigation/routes'


const headerButton = (dir, navigation) => {

    console.log('navigation', navigation)
    // RightDrawer is the parent drawer

    let drawNavigator

    if (navigation.getChildNavigation) {

        drawNavigator = navigation.getChildNavigation('RightDrawer')

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

    ///const handleToggleDrawer = () => {}

    return (
        <TouchableWithoutFeedback onPress={handleToggleDrawer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 5, paddingRight: 5}}>
                <Text>{dir === 'left' ? 'LEFT' : 'RIGHT'}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const MainStack = createStackNavigator(
    {
        LeftDrawer,
        ...tabRoutes,
        ...screenRoutes
    },
    {
        // !!! important - DON'T USE 'initialRouteName'. It will break tab routing, instead this is set in bottom-tabs
        //initialRouteName: 'Home',
        navigationOptions: ({navigation}) => ({
            headerMode: 'float',
            backgroundColor: '#c0c0c0',
            headerStyle: {
                backgroundColor: 'red'
            },
            headerLeft: headerButton('left', navigation),
            headerTitle: <Text>LOGO</Text>,
            headerRight: headerButton('right', navigation),
        })//,
        //path: 'main'
    }
)

const AppNavigator = createStackNavigator(
    {
        MainStack,
        ...modalRoutes
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

export default AppNavigator
