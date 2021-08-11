import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#296FD7"
    },
    imagePattern: {
        width: 400,
        height: 200,
    },
    selamatDatang: {
        fontFamily: 'Raleway_500Medium',
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginLeft: 2
    },
    parent: {
        fontFamily: 'Raleway_800ExtraBold',
        color: "rgba(255,255,255,1)",
        fontSize: 30,
    },
    selamatDatangColumn: {
        width: 300,
        marginTop: 40,
        marginLeft: 24,
        marginBottom: 40,
        position: 'absolute',
    },
    selamatDatangColumnFiller: {
        flex: 1
    },
    shapeAtas: {
        backgroundColor: 'white',
        height: 30,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },
    gridView: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#e5e5e5',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemCode: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Raleway_500Medium',
        marginBottom: 10,
    },
    shapeBackground: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    imgStyle: {
        justifyContent: 'center',
        width: '60%',
        height: '50%',
        marginLeft: 10,
    }
});