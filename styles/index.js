import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        paddingTop: 30,
        paddingBottom: 30
    },
    italic: {
        fontStyle: 'italic'
    },
    bold: {
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center'
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    menuItem: {
        margin: 0,
        padding: 0,
        flex: 1,
        alignItems: 'center'
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }
})