import {createBottomTabNavigator} from 'react-navigation'
import {tabRoutes} from '~modules/navigation/routes'


console.log('tabRoutes', tabRoutes)

const BottomTabs = createBottomTabNavigator({
    ...tabRoutes
}, {
    //router config
    initialRouteName: 'Settings',
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