import home from '~modules/screens/home'
import settings from '~modules/screens/settings'
import foo from '~modules/screens/foo'
import bar from '~modules/screens/bar'
import baz from '~modules/screens/baz'
import modalScreen from '~modules/modals/modal'
import anotherModalScreen from '~modules/modals/another-modal'


console.log('baz', baz)

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
    }
}

export const screenRoutes = {
    Foo: {
        screen: foo,
        path: 'foo/:param',
        navigationOptions: {}
    },
    Bar: {
        screen: bar,
        path: 'bar/:param',
        navigationOptions: {
            // hide header and tabs
            // header: null, // only works on push WTF!?!?
            // tabBarVisible: false
        }
    },
    Baz: {
        screen: baz,
        path: 'baz/:param',
        navigationOptions: {
            tabBarVisible: true
        }
    }
}


export const modalRoutes = {
    Modal: {
        screen: modalScreen
    },
    AnotherModal: {
        screen: anotherModalScreen
    }
}