/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/main/HomeScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import MainScreen from '../screens/main/MainScreen';
import {Image} from 'react-native';
import {imagespackages} from '../assets';
import SrfValue from '../utils/SrfValue';
import {palette} from '../Theme/palette';

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0c0c26',
          height: SrfValue(60),
        },
      }}
      //   tabBarOptions={{
      //     activeTintColor: 'blue',
      //     inactiveTintColor: 'gray',
      //     style: {backgroundColor: palette.primaryColor},
      //   }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={imagespackages.home}
              style={{
                tintColor: focused ? palette.white : '#e0e0e0',
                height: SrfValue(24),
                width: SrfValue(24),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={imagespackages.category}
              style={{
                tintColor: focused ? palette.white : '#e0e0e0',

                height: SrfValue(24),
                width: SrfValue(24),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={imagespackages.profile}
              style={{
                tintColor: focused ? palette.white : '#e0e0e0',
                height: SrfValue(24),
                width: SrfValue(24),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
