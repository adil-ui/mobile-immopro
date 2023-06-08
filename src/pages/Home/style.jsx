import { StyleSheet } from 'react-native'


const homeStyle = StyleSheet.create({
    homeContainer: {
        position: 'relative',
        backgroundColor: '#f4f4f4',
    },
    primaryColor: {
        color: '#f7b40c',
    },
    header: {
        zIndex: 99,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 90,
        height: 50,

    },
    btnAdd: {
        width: 150,
        backgroundColor: '#f7b40c',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        padding: 8,
        elevation: 1,
        marginLeft: 60

    },
    btnText: {
        fontWeight: '500',
    },
    heroContainer: {
        position: 'relative',
    },
    heroBack: {
        backgroundColor: 'black',
        opacity: 0.4,
        width: '100%',
        height: '100%',
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    heroTextContainer: {
        width: '100%',
        zIndex: 10,
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    heroImage: {
        width: '100%',
        height: 280,
    },

    heroText1: {
        color: '#f1f1f1',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 36,

    },


    latestProtperties: {
        width: '100%',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#f4f4f4',
        zIndex: 100,
        padding: 20,

    },
    title: {
        color: '#f7b40c',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 30,
        marginTop: 10,
    },
    card: {
        backgroundColor: 'white',
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginBottom: 20,
    },
    ImageContainer: {
        width: '35%',
    },
    cardText: {
        width: '65%',
        padding: 10,

    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 500,
    },
    cardPrice: {
        fontSize: 14,
        color: '#f7b40c',
        fontWeight: 500,
    },
    cardTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    cardImage: {
        width: '100%',
        height: 120,
    },


});

export default homeStyle;