import COLORS from '../../styles/colors.js';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../styles/stylesheet.js';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import { BlurView } from "@react-native-community/blur";

import Header from '../elements/Header.js';
import realm from '../../userData/realm.js';


const Tab = createBottomTabNavigator();




//Account Page Content
function AcccountView({ navigation }) {

  const [editingId, setEditingId] = useState(-1);
  const [jobsExist, setJobsExist] = useState(realm.objects('Job').length > 0)
  const [jobList, setJobList] = useState([]);
  const [items, setItems] = useState([]);

  const [editJobModalVisible, setEditJobModalVisible] = useState(false);
  const editJob = x => {
    setEditingId(x);
    console.log('edit job: ' + editingId);
    setEditJobModalVisible(true);
  }

  const submitInfo = () => {

    //Check usePin and useBiometric
    //if usePin is true, navigate to pin setup screen
    selectedJob = realm.objectForPrimaryKey('Job', editingId);
    if (!userExists) {
      createRealmUser();
      if (usePin) {
        navigation.navigate('PinSetup');
      } else {
        navigation.navigate('JobSetup');
      }
    } else {
      Alert.alert('A user already exists, do you wish to overwrite account data?', 'You cannot undo this action.', [{ text: 'Cancel', style: 'cancel', onPress: () => navigation.goBack() }, {
        text: 'Overwrite', style: 'destructive', onPress: () => {
          updateRealmUser();
          if (usePin) {
            navigation.navigate('PinSetup');
          } else {
            if (realm.objects('Job').length > 0) {
              navigation.navigate('SetupComplete');
            } else {
              navigation.navigate('JobSetup');
            }
          }
        }
      }]);
    }

  }


  useEffect(() => {
    //set it to run only if the logs collection from mongodb is not empty
    if (jobsExist) {
      setJobList(realm.objects('Job'));
      //somehow jobsFromDB after this line has not data
      /*setItems(jobsFromDB.map((e)=>{
        return {label:e.employer,value:e.id}
      }))
      */
    }
  }, [jobsExist])



  useEffect(() => {
    if (jobList.length > 0) {
      setItems(jobList.map((e) => {
        return ({
          key: e.id,
          employer: e.employer,
          client: e.client,
          location: e.location,
          color: e.color,
        })

      }))
    } else {
      //empty the items
      setItems([])
      //set the jobID back to default
    }
  }, [jobList])


  const profilePicDimensions = Dimensions.get('window').width * 0.35;

  var userExists = false;

  var firstName = 'no First Name';
  var lastName = 'no Last Name';
  var fullName = 'no Name Stuff';
  var birthday = 'no Birthday';
  var email = 'no Email';
  //var jobList = [];
  // var locationList = [];
  // var logsList = [];

  if (realm) {
    userExists = realm.objects('User').length > 0;
    const user = realm.objects('User');
    // jobList = JSON.stringify(realm.objects('Job'));
    // locationList = JSON.stringify(realm.objects('GeofenceLocation'));
    // logsList = JSON.stringify(realm.objects('WorkLog'));
    if (userExists) {
      //Alert.alert('There is a user in the database.');
      //Alert.alert('User: ' + user[0].firstName);

      firstName = user[0].firstName;
      lastName = user[0].lastName;
      fullName = firstName + ' ' + lastName;
      birthday = user[0].birthday;
      email = user[0].email;
    }
  } else {
    Alert.alert('Realm is not defined, navigating anyway');
  }
  //If editButtonPressed is true, then render the version of the page with the TextInputs 
  //rather than Text elements.
  //Static version of the page
  return (
    <View style={styles.container}>
      <View style={styles.profileInformationContainer}>
        <Image source={require('../../assets/images/icons/ProfileDefault.png')} style={{ width: profilePicDimensions, maxHeight: profilePicDimensions }} />
        <View>
          <View style={styles.profileAccountInfoField}>
            <Text style={styles.profileAccountInfoText}>{fullName}</Text>
          </View>
          <View style={styles.profileAccountInfoField}>
            <Text style={styles.profileAccountInfoText}>{email}</Text>
          </View>

          <View style={styles.profileAccountInfoField}>
            <Text style={styles.profileAccountInfoText}>{birthday}</Text>
          </View>
        </View>
      </View >
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Setup", { screen: 'InitialSetup' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Setup", { screen: 'JobSetup' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Add Job
            </Text>
          </View>
        </TouchableOpacity>


      </View>

      <View style={{ maxHeight: '40%', width: '100%', alignItems: 'center', margin: '1%', justifyContent: 'flex-end' }}>
        <Text style={styles.subtitle}>Saved Jobs</Text>


        <FlatList
          data={items}

          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => editJob(item.key)}>
              <View style={[styles.jobItemButton, { borderColor: item.color, shadowColor: item.color }]}>
                <Text style={styles.logItemLabel}>{item.employer} </Text><Text style={styles.logItemLabel}>{item.key}</Text>
                <Image source={require('../../assets/images/icons/Pencil.png')} style={{ width: Dimensions.get('window').width * 0.07, height: Dimensions.get('window').width * 0.07 }}></Image>
              </View>
            </TouchableOpacity>}
        />


      </View>

      {/* <TouchableOpacity onPress={() => navigation.navigate("Testing")}>
        <View style={styles.testButton}>
          <Text style={styles.buttonText}>
            TESTING
          </Text>
        </View>
      </TouchableOpacity> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={editJobModalVisible}
        onRequestClose={() => {
          setEditJobModalVisible(false);
        }}
      >
        <View style={styles.modalCardContainer}>
          <BlurView
            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="white"
          />
          <View style={styles.jobEditContainer}>


            <Text style={styles.subtitle}>Editing Job: {editingId}</Text>
            {/*             
            <TextInput
              style={styles.noteText}
              placeholder='Add notes here...'
              placeholderTextColor={COLORS.lightPlaceholder}
              multiline={true}
              onChangeText={newText => setNoteText(newText)}
            >
            </TextInput> */}
            <View style={styles.buttonWrap}>

              <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.active }]} onPress={() => setEditJobModalVisible(false)}>
                {/* This does not properly navigate to previous screen, always returns to account page
                    even when accessed through InitialSetupView */}
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => submitInfo()}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal>




    </View>

    // </View>

  );
}


//Handles stack navigation settings for account//
export default function Account({ navigation }) {

  return (
    //Display header in here
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          display: 'none',
        },
        //For some reason touch target for account icon is too tall, abt double height
        headerRight: () => (
          <Header title="Account" />
        ),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20, paddingBottom: 5 }} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/icons/Back.png')} style={{ width: Dimensions.get('window').width * 0.04, maxHeight: Dimensions.get('window').width * 0.07 }} />
          </TouchableOpacity>
        ),


      })}
    >
      <Tab.Screen
        name="accountView"
        component={AcccountView}
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
