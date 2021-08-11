import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9b59b6"
    },
    heading: {
        backgroundColor: '#9b59b6',
        height: 100,
        width: '80%',
        marginLeft: 14,
    },
    description: {
        fontFamily: 'Raleway_300Light',
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        lineHeight: 20,
        marginTop: 16,
        marginLeft: 10,
    },
    gridView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        // backgroundColor: '#e5e5e5',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        height: 75,
        flexDirection: "row",
    },
    itemName: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
    },
    itemCode: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Raleway_500Medium',
        marginBottom: 10,
    },
    columnsatu: {
        flex: 7,
    },
    columndua: {
        flex: 2,
        justifyContent: 'center',
    },
    buttonStyle: {
        height: '60%',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
    },
})