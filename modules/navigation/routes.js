import Home from '~modules/screens/home'
import Settings from '~modules/screens/settings'
import Foo from '~modules/screens/foo'
import Bar from '~modules/screens/bar'
import Baz from '~modules/screens/baz'
import ModalScreen from '~modules/modals/modal'
import AnotherModalScreen from '~modules/modals/another-modal'

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
            header: null,
            tabBarVisible: false
        }
    },
    Baz: {
        screen: Baz,
        path: 'baz/:param',
        navigationOptions: {
            // hide tabs
            tabBarVisible: false
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