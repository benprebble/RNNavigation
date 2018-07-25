import React from 'react'
import {TouchableWithoutFeedback, View, Text, Button} from 'react-native'
import LeftDrawer from '~modules/navigation/left-drawer'
import {createStackNavigator} from 'react-navigation'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'


const headerButton = (dir, navigation) => {
    // RightDrawer is the parent drawer
    const drawNavigator = navigation.getChildNavigation('RightDrawer')

    const handleToggleDrawer = () => {

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

const AppNavigator = createStackNavigator(
    {
        LeftDrawer,
        ...tabRoutes,
        ...screenRoutes
    },
    {
        navigationOptions: ({navigation}) => ({
                headerMode: 'float',
                backgroundColor: '#c0c0c0',
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerLeft: headerButton('left', navigation),
                headerTitle: <Text>LOGO</Text>,
                headerRight: headerButton('right', navigation)
            }
        )}
)

export default AppNavigator
