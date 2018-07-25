import home from '~modules/screens/home'
import settings from '~modules/screens/settings'
import foo from '~modules/screens/foo'
import bar from '~modules/screens/bar'
import baz from '~modules/screens/baz'
import modalScreen from '~modules/modals/modal'


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
        navigationOptions: {}
    },
    Bar: {
        screen: bar,
        navigationOptions: {
            mode: 'modal'
        }
    },
    Baz: {
        screen: baz,
        navigationOptions: {}
    }
}


export const modalRoutes = {
    MyModal: {
        screen: modalScreen,
        navigationOptions: {
            mode: 'modal',
            headerMode: 'none'
        }
    }
}