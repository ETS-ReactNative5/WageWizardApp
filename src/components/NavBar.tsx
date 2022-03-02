import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Alert, Button, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../styles/colors.js';

import React from 'react';
import Tracking from './Track';
import Resources from './Resources';
import WorkLogs from './WorkLogs';
import MyWage from './MyWage';
import CustomIcon from './CustomIcon.js';
import Header from './Header.js';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();


export default function NavBar() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Resources') {
            iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
          } 
          else if (route.name === 'Track') {
              iconName = focused ? 'stopwatch' : 'stopwatch';
          }
          else if (route.name === 'My Wage') {
              iconName = focused ? 'cash' : 'cash';
          }
          else if (route.name === 'Work Log') {
              iconName = focused ? 'book' : 'book';
          }
          else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person';
        }

          // You can return any component that you like here! -->>> SHOULD BE ICON THO
          //Currently, I'm just displaying each icon as a png as a workaround,
          // eventually they will be accessed from /assets/fonts/CustomIcons.ttf
          return <Resources/>; //Temp placeholder

        },
       
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle:{
          display: 'none',
        },
        headerRight: () => (
          <Icon.Button
            name="user"
            onPress={() => {Alert.alert('This will navigate to account page')}} 
            size={25} 
            color={COLORS.secondary} 
            backgroundColor={COLORS.primary}
          ></Icon.Button>

        ),
        headerLeft: () => (
          <Header title={route.name} />
        ),
       
        

        

        tabBarInactiveBackgroundColor:COLORS.primary,
            tabBarActiveBackgroundColor:COLORS.active,
            tabBarInactiveTintColor:COLORS.icon,
            tabBarActiveTintColor:"black",
      })}
      tabBar={props => <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,5)}}></BottomTabBar>}

      >
        <Tab.Screen
          name="Tracking" 
          component={Tracking}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/images/icons/Stopwatch.png')}
                />
              );
            }}
        } />
        <Tab.Screen 
          name="WorkLogs" 
          component={WorkLogs}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/images/icons/Notebook.png')}
                />
              );
            }}
      } />
        <Tab.Screen 
          name="Resources" 
          component={Resources}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/images/icons/Info.png')}
                />
              );
            }}
    } />
        <Tab.Screen 
          name="My Wage" 
          component={MyWage}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('../assets/images/icons/Money.png')}
                />
              );
            }}
    } />
      </Tab.Navigator>
    );
  }