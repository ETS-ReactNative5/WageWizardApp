//Useful resources:
//https://medium.com/@shanerudolfworktive/7-tips-to-develop-react-native-uis-for-all-screen-sizes-7ec5271be25c

//TODO:
//1. Transfer all remaining styles from separate files
//2. Switch (almost) every px to %, rem, & Dimensions.get('window')
//3. Check content sizing on different screen sizes
//4. Check accessibility setting behavior

import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
//import COLORS from "../styles/colors.js";


const styles = EStyleSheet.create({


    //Thisll get messy really fast, so we'll need a way to organize the styles
    //Maybe like this?


    //INTERACTIVE ELEMENTS
    //Buttons//
    searchButton: {
        width: '15%',
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
    },

    testButton: {
        margin: '1%',
        backgroundColor: 'red',
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.4,
    },


    startButton: {
        width: Dimensions.get('window').height * 0.15,
        height: Dimensions.get('window').height * 0.15,
        borderRadius: Dimensions.get('window').height * 0.15 / 1.5,
        backgroundColor: 'green',
        borderColor: COLORS.primary,
        borderWidth: 2,
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    stopButton: {
        width: Dimensions.get('window').height * 0.15,
        height: Dimensions.get('window').height * 0.15,
        borderRadius: Dimensions.get('window').height * 0.15 / 1.5,
        backgroundColor: 'red',
        borderColor: COLORS.primary,
        borderWidth: 2,
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },


    //Buttons//


    //Switches//

    //Switches//


    //Pickers//

    //Pickers//

    //TextInputs//
    searchText: {
        width: '80%',
        borderRadius: 15,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.secondary,
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
    },

    setupTextField: {
        width: Dimensions.get('window').width * 0.8,
        maxHeight: Dimensions.get('window').height * 0.1,
        borderRadius: 15,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.secondary,
        borderWidth: 2,
        padding: '2%',
        margin: '2%',
        alignItems: 'center',
    },

    //TextInputs//


    //STATIC ELEMENTS
    //Text//
    title: {
        fontSize: '35rem',
        fontFamily: 'Comfortaa-Bold',
        color: COLORS.dark,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: '25rem',
        fontFamily: 'Comfortaa-Bold',
        color: COLORS.dark,
        textAlign: 'center',
    },
    directions: {
        fontSize: '15rem',
        fontWeight: '300',
        textAlign: 'center',
        color: COLORS.dark,
    },
    profileAccountInfoField: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: '2%',
    },
    headerTxt: {
        fontSize: '30rem',
        color: COLORS.secondary,
        fontFamily: 'Comfortaa-Bold',
        alignContent: 'flex-start',
    },
    timerText: {

        fontSize: '35rem',
        fontWeight: '400',
        fontFamily: 'SFPro-Regular',
        color: COLORS.dark,
        textAlign: 'center',
    },
    timerLabel: {

        fontSize: '35rem',
        fontWeight: '400',
        fontFamily: 'SFPro-Regular',
        color: 'gray',
        textAlign: 'center',
    },
    currentJobLabel: {
        fontSize: '15rem',
        fontWeight: '500',
        textAlign: 'center',
        color: 'gray',
    },
    currentJobValue: {
        fontSize: '15rem',
        fontWeight: '500',
        textAlign: 'center',
        color: COLORS.dark,
    },



    //Text//


    //Labels//
    buttonText: {
        margin: 5,
        padding: 10,
        color: COLORS.light,
        fontSize: 20,
        height: 44,
        fontWeight: 'bold'
    },

    //Labels//


    //Images//

    //Images//


    //CONTAINERS
    searchContainer: {
        width: '90%',
        height: '5%',
        display: 'flex',
        flexDirection: 'row',
        margin: '5%',
        alignItems: 'center',
    },

    userSetupFieldsContainer: {
        width: '100%',
        alignItems: 'center',
    },

    profileInformationContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '15%',
        marginTop: '5%',
        marginBottom: '5%',

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    /////////////OLD STYLES BELOW//////////////

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    elements: {
        paddingBottom: Dimensions.get('window').height * 0.02,
        paddingTop: Dimensions.get('window').height * 0.02,
        fontSize: 40,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.35,
        borderRadius: 15,
        borderColor: COLORS.dark,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden',
    },
    infoBox: {
        display: 'flex',
        minWidth: Dimensions.get('window').width * 0.9,
        minHeight: Dimensions.get('window').height * 0.07,
        margin: 15,
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        borderColor: COLORS.dark,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 25,
        padding: 10,
        backgroundColor: COLORS.active,
        fontSize: 18,
        height: 44,
    },
    label: {
        fontSize: 23,
    },
    infoTxt: {
        fontSize: 50,
    },
    btn: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },

    ////////////////Track View Styles///////////////
    start: {
        width: Dimensions.get('window').height * 0.2,
        height: Dimensions.get('window').height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Dimensions.get('window').height * 0.2 / 2,
        borderColor: COLORS.dark,
        borderWidth: 2,
        backgroundColor: "green",
    },
    picker: {
        margin: 15, padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.07,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.primary,
        zIndex: 1,
    },
    pickerLabel: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    ////////////////Track View Styles///////////////

    ////////////////Initial Setup View Styles///////////////

    field: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        //maxHeight: '10%',
        //margin: '2%',
    },
    input: {
        width: '80%',
        borderRadius: 15,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.secondary,
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
    },

    directionsWrap: {
        width: Dimensions.get('window').width * 0.8,
        marginBottom: '5%',
        alignItems: 'center',
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.4,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%',
    },

    ////////////////Initial Setup View Styles///////////////


    ////////////////Header Styles///////////////
    headerContainer: {
        height: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').width * 0.5,
        paddingLeft: '10%',
        alignItems: 'center',
        flexDirection: 'row',


    },



    ////////////////Header Styles///////////////


});

export default styles;