import React from 'react'
import LeftDrawer from '~modules/navigation/left-drawer'
import {createStackNavigator, createDrawerNavigator} from 'react-navigation'
import {screenRoutes, tabRoutes} from './routes'

const AppNavigator = createStackNavigator(
    {
        LeftDrawer: LeftDrawer,
        //...tabRoutes,
        ...screenRoutes
    },
    {
        navigationOptions: ({navigation}) => ({
                headerMode: 'float',
                backgroundColor: '#c0c0c0',
                headerStyle: {
                    backgroundColor: 'red'
                }
            }
        )}
)

export default AppNavigator
