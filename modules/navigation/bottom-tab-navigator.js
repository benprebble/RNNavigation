import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'

const HomeTab = createStackNavigator(
    {
        ...tabRoutes,
        ...screenRoutes, // make tabs available on screen routes
    },
    {
        navigationOptions: {
            header: null
        }
    }
)

const SettingsTab = createStackNavigator(
    {
        ...tabRoutes,
        ...screenRoutes,
    },
    {
        navigationOptions: {
            header: null
        }
    }
)

const TabBarComponent = (props) => {
    return (
        <BottomTabBar
            {...props}
            navigation={{
                ...props.navigation,
                state: {
                    ...props.navigation.state,
                    // filter unwanted routes from tab bar
                    routes: props.navigation.state.routes.filter(route => {
                        return (route.key in tabRoutes === true)
                    })
                }
            }}
        />
    )
}

const BottomTabNavigator = createBottomTabNavigator({
    ...tabRoutes, // enables us to set initialRouteName to 'Home'
    ...screenRoutes,
    HomeTab,
    SettingsTab
}, {
    //router config
    tabBarComponent: props => (<TabBarComponent {...props} />),
    initialRouteName: 'Home',
    // navigation for complete tab navigator
    navigationOptions: {
        tabBarVisible: true,
        header: null
    },
    tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'grey'
    }
})

export default BottomTabNavigator