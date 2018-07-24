import home from '~modules/screens/home'
import settings from '~modules/screens/settings'
import foo from '~modules/screens/foo'
import bar from '~modules/screens/bar'

export const tabRoutes = {
    Home: {
        screen: home,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    Settings: {
        screen: settings,
        navigationOptions: {
            tabBarLabel: 'Settings'
        }
    },
    // Foo: {
    //     screen: foo,
    //     navigationOptions: {
    //         tabBarLabel: 'FOOX'
    //     }
    // }
}

export const screenRoutes = {
    Foo: {
        screen: foo,
        navigationOptions: {
        }
    },
    Bar: {
        screen: bar,
        navigationOptions: {
        }
    }
}