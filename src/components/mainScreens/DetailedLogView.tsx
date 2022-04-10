// gonna be useful: https://reactnavigation.org/docs/hiding-tabbar-in-screens
// as will this https://reactnavigation.org/docs/stack-navigator/
import React from 'react';
import Header from '../elements/Header';
import { View, Text, StyleSheet, Dimensions, Alert, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../styles/colors';
import { produceWithPatches } from 'immer';


// const getDetailedLog = (props) => {
//     const id = props.route.params.id;




//Possibly add some sqeuomorphic styling for the log sheet?
//Animate a slide up when a user presses a log
export default function DetailedLogView({ navigation }: { navigation: any }) {
    //console.log("DetailedLogView props: ", props.logId);
    return (
        <>
            {/* Implement card styling here */}
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: COLORS.primary, paddingTop: Dimensions.get('window').height * 0.06 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={(require('../../assets/images/icons/Back.png'))} style={{ marginLeft: 25, width: Dimensions.get('window').width * 0.04, height: Dimensions.get('window').width * 0.07 }} />
                </TouchableOpacity>
                <Header title="Details" />
            </View>

            {/*This is all temporary data for prototyping purposes. Eventually logs will be 
            pulled from the realm db located in src/userData */}
            <View style={styles.logContainer}>
                <Text style={styles.logTitle}>
                    Job - 10/30/21
                </Text>

                <View style={styles.textWrap}>
                    <Text style={styles.logLabel}>
                        Employer:
                    </Text>
                    <Text style={styles.logText}>
                        SCU
                    </Text>
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.logLabel}>
                        Client:
                    </Text>
                    <Text style={styles.logText}>
                        Annie H.
                    </Text>
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.logLabel}>
                        Time Started:
                    </Text>
                    <Text style={styles.logText}>
                        8:00 AM
                    </Text>
                </View>

            </View>
            <View style={styles.buttonWrap}>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert("This will summon the OS sharesheet")}>
                    <Text style={{ color: COLORS.secondary }}>Export</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    logContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        borderColor: COLORS.dark,
        borderWidth: 2,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.7,
        margin: 20,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logTitle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: COLORS.dark,
        textAlign: 'center',
    },
    logText: {
        fontSize: 18,
        color: COLORS.dark,
        textAlign: 'right',
    },
    logLabel: {
        fontSize: 18,
        color: COLORS.dark,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 10,
    },
    textWrap: {
        width: Dimensions.get('window').width * 0.8,
        minHeight: Dimensions.get('window').height * 0.05,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderColor: COLORS.dark,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
    },
    button: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        //paddingTop: Dimensions.get('window').height * 0.3,
        //This is a temp fix to force the buttons to be on the bottom of the screen
        //Content is cut off at some screen sizes, but "flex-end" doesn't work
    },
});