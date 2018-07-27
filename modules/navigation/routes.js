import Home from '~modules/screens/home'
import Settings from '~modules/screens/settings'
import Foo from '~modules/screens/foo'
import Bar from '~modules/screens/bar'
import Baz from '~modules/screens/baz'
import ModalScreen from '~modules/modals/modal'
import AnotherModalScreen from '~modules/modals/another-modal'


//console.log('baz', baz)

export const tabRoutes = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings'
        }
    }
}

export const screenRoutes = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings'
        }
    },
    Foo: {
        screen: Foo,
        path: 'foo/:param',
        navigationOptions: {}
    },
    Bar: {
        screen: Bar,
        path: 'bar/:param',
        navigationOptions: {
            // hide header and tabs
            // header: null, // only works on push WTF!?!?
            // tabBarVisible: false
        }
    },
    Baz: {
        screen: Baz,
        path: 'baz/:param',
        navigationOptions: {
            //tabBarVisible: false
        }
    }
}


export const modalRoutes = {
    Modal: {
        screen: ModalScreen
    },
    AnotherModal: {
        screen: AnotherModalScreen
    }
}