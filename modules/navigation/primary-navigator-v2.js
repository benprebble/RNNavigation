import React, {PureComponent} from 'react'
import {TouchableWithoutFeedback, ScrollView, View, Text, Button} from 'react-native'
import {createStackNavigator, createDrawerNavigator, DrawerActions} from 'react-navigation'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import {tabRoutes, screenRoutes, modalRoutes} from '~modules/navigation/routes'


const headerButton = (dir, navigation) => {

    console.log('navigation', navigation)
    // RightDrawer is the parent drawer

    let drawNavigator

    // if (navigation.getChildNavigation) {
    //
    //     drawNavigator = navigation.getChildNavigation('RightDrawer')
    //
    // }

    const handleToggleDrawer = () => {

        if ( ! drawNavigator) {
            console.warn('No drawNavigator!!!')
            return false
        }

        if (dir === 'left') {
            drawNavigator.closeRightDrawer()
            drawNavigator.toggleLeftDrawer()
        }

        if (dir === 'right') {
            drawNavigator.closeLeftDrawer()
            drawNavigator.toggleRightDrawer()
        }
    }

    ///const handleToggleDrawer = () => {}

    return (
        <TouchableWithoutFeedback onPress={handleToggleDrawer}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 5, paddingRight: 5}}>
                <Text>{dir === 'left' ? 'LEFT' : 'RIGHT'}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}



class LeftMenuContent extends PureComponent {
    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>LEFT DRAWER</Text>
                    <Button title={'NAVIGATE to foo'} onPress={() => navigate('Foo')} />
                    <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
                    <Button title={'NAVIGATE to baz'} onPress={() => navigate('Baz')} />
                </ScrollView>
            </View>
        )
    }
}

class RightMenuContent extends PureComponent {
    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>RIGHT DRAWER</Text>
                    <Button title={'NAVIGATE to foo'} onPress={() => navigate('Foo')} />
                    <Button title={'NAVIGATE to bar'} onPress={() => navigate('Bar')} />
                </ScrollView>
            </View>
        )
    }
}

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

const BottomTabNavigationStack = createBottomTabNavigator({
    ...tabRoutes,
    ...screenRoutes
}, {
    tabBarComponent: props => (<TabBarComponent {...props} />),
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

const RightDrawerNavigationStack = createDrawerNavigator(
    {
        BottomTabNavigationStack,
        //...screenRoutes
    },
    {
        drawerPosition: 'right',
        contentComponent: RightMenuContent,
        getCustomActionCreators: (route, stateKey) => ({
            closeRightDrawer: () => DrawerActions.closeDrawer({key: stateKey}),
            toggleRightDrawer: () => DrawerActions.toggleDrawer({key: stateKey})
        })
    }
)

const LeftDrawerNavigationStack = createDrawerNavigator(
    {
        RightDrawerNavigationStack,
        //BottomTabNavigationStack
    },
    {
        contentComponent: LeftMenuContent,
        getCustomActionCreators: (route, stateKey) => ({
            closeLeftDrawer: () => DrawerActions.closeDrawer({key: stateKey}),
            toggleLeftDrawer: () => DrawerActions.toggleDrawer({key: stateKey})
        })
    }
)

const MainNavigationStack = createStackNavigator(
    {
    //     LeftDrawerNavigationStack,
    //     BottomTabNavigationStack,
         ...tabRoutes,
        ...screenRoutes
    },
    {
        // !!! important - DON'T USE 'initialRouteName'. It will break tab routing, instead this is set in bottom-tabs
        //initialRouteName: 'Home',
        initialRouteName: 'Home',
        navigationOptions: ({navigation}) => ({
            headerMode: 'float',
            backgroundColor: '#c0c0c0',
            headerStyle: {
                backgroundColor: 'red'
            },
            headerLeft: headerButton('left', navigation),
            headerTitle: <Text>LOGO</Text>,
            headerRight: headerButton('right', navigation),
        })//,
        //path: 'main'
    }
)

const RootNavigationStack = createStackNavigator(
    {

        LeftDrawerNavigationStack,
        BottomTabNavigationStack,
        MainNavigationStack,


        // ...modalRoutes,
        // ...screenRoutes
    },
    {
        mode: 'modal',
      //  headerMode: 'none'
    }
)

export default RootNavigationStack
