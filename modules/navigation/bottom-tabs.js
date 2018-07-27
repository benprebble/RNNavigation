import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'

const HomeTab = createStackNavigator(
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

const BottomTabs = createBottomTabNavigator({
    //...tabRoutes,
    ...screenRoutes,

    HomeTab,
    SettingsTab
}, {
    tabBarComponent: props => (<TabBarComponent
        {...props}
       // tabRoutes={tabRoutes}
    />),
    //router config
    initialRouteName: 'Home',

    // !!! important - important - DON'T USE 'order'. It will break screen routing
    //order: ['Settings', 'Home'],
    //navigation for complete tab navigator
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'grey'
    }
})

export default BottomTabs