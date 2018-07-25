import React from 'react'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import {screenRoutes, tabRoutes} from '~modules/navigation/routes'

const TabBarComponent = (props) => {
    return (
        <BottomTabBar
            {...props}
            navigation={{
                ...props.navigation,
                state: {
                    // filter unwanted routes from tab bar
                    routes: props.navigation.state.routes.filter(route => {
                        return route.routeName !== 'Foo' && route.routeName !== 'Bar' && route.routeName !== 'Baz'
                    })
                }
            }}
        />
    )
}

const BottomTabs = createBottomTabNavigator({
    ...tabRoutes,
    ...screenRoutes
}, {
    tabBarComponent: props => (<TabBarComponent {...props} />),
    //router config
    initialRouteName: 'Home',

    // !important - DON'T USE ORDER. It will break screen routing
    //order: ['Settings', 'Home'],
    //navigation for complete tab navigator
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey'
    }
})

export default BottomTabs