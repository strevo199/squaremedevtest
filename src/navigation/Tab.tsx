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
import ScreenOne from '../screens/main/ScreenOne';

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F1F6FB',
          height: SrfValue(70),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={imagespackages.Home}
              style={{
                tintColor: focused ? '#555' : palette.lightGray,
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
              source={imagespackages.Markey}
              style={{
                tintColor: focused ? '#555' : palette.lightGray,
                height: SrfValue(24),
                width: SrfValue(24),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={imagespackages.Cart}
              style={{
                tintColor: focused ? '#555' : palette.lightGray,
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
              source={imagespackages.Heart}
              style={{
                tintColor: focused ? '#555' : palette.lightGray,
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
