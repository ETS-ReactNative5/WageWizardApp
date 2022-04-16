import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Image, Text, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';


import COLORS from '../../styles/colors.js';

import React from 'react';
import Tracking from '../mainScreens/Track';
import Resources from '../mainScreens/Resources';
import WorkLogs from '../mainScreens/WorkLogs';
import MyWage from '../mainScreens/MyWage';
import Header from './Header.js';

import realm from '../../userData/realm.js';

import {
  View,
} from 'react-native';

const Tab = createBottomTabNavigator();

export default function NavBar({ navigation }) {
  //const [userName, setUserName] = useState('no name');
  var userName = 'no name';
  if (realm) {
    if (realm.objects('User').length > 0) {
      const user = realm.objects('User');
      userName = user[0].firstName;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        lazy: false,

        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          display: 'none',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingRight: 10 }}>
              <View>
                <Text style={{ fontSize: 20, paddingRight: 10, color: COLORS.secondary }}>{userName}'s</Text>
                <Text style={{ fontSize: 20, paddingRight: 10, color: COLORS.secondary }}>Account</Text>
              </View>
              <Image source={require('../../assets/images/icons/ProfileDefault.png')} style={{ width: 40, maxHeight: 40 }} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <Header title={route.name} />
        ),
        tabBarInactiveBackgroundColor: COLORS.primary,
        tabBarActiveBackgroundColor: COLORS.active,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          maxHeight: '10%',
          paddingBottom: 0,
        },
        tabBarItemStyle: {
          paddingBottom: DeviceInfo.hasNotch() ? '5%' : 0,
        }

      })}
    >

      <Tab.Screen
        name="Tracking"
        component={Tracking}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{ width: size, height: size }}
                source={require('../../assets/images/icons/Stopwatch.png')}
              />
            );
          }
        }
        } />

      <Tab.Screen
        name="My Wage"
        component={MyWage}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{ width: size, height: size }}
                source={require('../../assets/images/icons/Money.png')}
              />
            );
          }
        }
        } />
      <Tab.Screen
        name="Work Logs"
        component={WorkLogs}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{ width: size, height: size }}
                source={require('../../assets/images/icons/Notebook.png')}
              />
            );
          }
        }
        } />
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{ width: size, height: size }}
                source={require('../../assets/images/icons/Info.png')}
              />
            );
          }
        }
        } />
    </Tab.Navigator>
  );
}